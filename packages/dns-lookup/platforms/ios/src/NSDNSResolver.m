#import "NSDNSResolver.h"
#include <netdb.h>
#include <arpa/inet.h>

@implementation NSDNSResolver

+ (void)resolveHost:(NSString *)hostname completion:(void (^)(NSArray<NSString *> *ips))completion {
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    NSMutableArray<NSString *> *ips = [NSMutableArray array];

    const char *hostCStr = [hostname UTF8String];
    struct addrinfo hints;
    struct addrinfo *res = NULL;

    memset(&hints, 0, sizeof(hints));
    hints.ai_family = AF_UNSPEC;       // IPv4 + IPv6
    hints.ai_socktype = SOCK_STREAM;   // TCP (needed for getaddrinfo)
    
    int status = getaddrinfo(hostCStr, NULL, &hints, &res);
    if (status != 0) {
      dispatch_async(dispatch_get_main_queue(), ^{
        completion(@[]);
      });
      return;
    }

    struct addrinfo *p = res;
    while (p != NULL) {
      char ipstr[INET6_ADDRSTRLEN];
      void *addr;

      if (p->ai_family == AF_INET) { // IPv4
        struct sockaddr_in *ipv4 = (struct sockaddr_in *)p->ai_addr;
        addr = &(ipv4->sin_addr);
      } else if (p->ai_family == AF_INET6) { // IPv6
        struct sockaddr_in6 *ipv6 = (struct sockaddr_in6 *)p->ai_addr;
        addr = &(ipv6->sin6_addr);
      } else {
        p = p->ai_next;
        continue;
      }

      if (inet_ntop(p->ai_family, addr, ipstr, sizeof(ipstr))) {
        [ips addObject:[NSString stringWithUTF8String:ipstr]];
      }

      p = p->ai_next;
    }

    freeaddrinfo(res);

    dispatch_async(dispatch_get_main_queue(), ^{
      completion([ips copy]);
    });
  });
}

@end
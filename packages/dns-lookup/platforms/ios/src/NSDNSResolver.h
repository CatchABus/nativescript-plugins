#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSDNSResolver : NSObject

// Resolves a hostname to an array of IP strings (IPv4 and IPv6)
+ (void)resolveHost:(NSString *)hostname completion:(void (^)(NSArray<NSString *> *ips))completion;

@end

NS_ASSUME_NONNULL_END
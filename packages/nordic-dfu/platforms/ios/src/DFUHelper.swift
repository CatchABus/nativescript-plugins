import Foundation
import NordicDFU

@objc public class DFUHelper: NSObject {
  @objc public static func initDFUServiceInitiator() -> DFUServiceInitiator {
    return DFUServiceInitiator(queue: nil);
  }
}
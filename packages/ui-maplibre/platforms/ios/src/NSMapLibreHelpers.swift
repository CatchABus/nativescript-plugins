import UIKit
import CoreLocation
import MapLibre

@objc(NSMapLibreHelpers)
class NSMapLibreHelpers: NSObject {
  @objc static func setPointFeatureCoordinate(_ feature: MLNPointFeature, coordinate: CLLocationCoordinate2D) {
    feature.coordinate = coordinate
  }
}

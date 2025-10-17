import UIKit
import CoreLocation
import MapLibre

@objc(NSCMapLibreHelpers)
class NSCMapLibreHelpers: NSObject {
  @objc static func setPointFeatureCoordinate(_ feature: MLNPointFeature, coordinate: CLLocationCoordinate2D) {
    feature.coordinate = coordinate
  }
}

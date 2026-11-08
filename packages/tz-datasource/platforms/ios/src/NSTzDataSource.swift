import Foundation

@objc public class NSTzDataSource: NSObject {
    @objc public static func generateTimeZoneData(_ tzName: NSString, _ fullYearDataRange: NSInteger) -> NSString? {
        if let tz = NSTimeZone.init(name: tzName as String) {
            let yearDataRange = fullYearDataRange / 2
            let curCalendar = NSCalendar.current
            let curDate = Date.init()
            
            if let startPoint = curCalendar.date(byAdding: Calendar.Component.year, value: -yearDataRange, to: curDate),
               let endPoint = curCalendar.date(byAdding: Calendar.Component.year, value: yearDataRange, to: curDate) {
                let startTimestamp = startPoint.timeIntervalSince1970
                let endTimestamp = endPoint.timeIntervalSince1970
                var jsonArray: [[Any]] = []
                
                var transition = tz.nextDaylightSavingTimeTransition(after: startPoint)
                while (transition != nil && transition!.timeIntervalSince1970 >= startTimestamp && transition!.timeIntervalSince1970 <= endTimestamp) {
                    jsonArray.append(createJSONZoneEntry(transition!, tz))
                    transition = tz.nextDaylightSavingTimeTransition(after: transition!)
                }
                
                /**
                 * Handle cases of zone IDs without transitions in the specified year range.
                 * In such cases, this method will return the timezone data as fallback using the range start timestamp as transition point.
                 */
                if (jsonArray.isEmpty) {
                    jsonArray.append(createJSONZoneEntry(startPoint, tz))
                }
                
                if let jsonData = try? JSONSerialization.data(withJSONObject: jsonArray) {
                    return NSString.init(data: jsonData, encoding: NSUTF8StringEncoding)
                }
            }
        }
        
        return nil
    }
    
    private static func createJSONZoneEntry(_ transition: Date, _ tz: NSTimeZone) -> [Any] {
        return [
            transition.timeIntervalSince1970,
            tz.abbreviation(for: transition) ?? "",
            tz.secondsFromGMT(for: transition),
            tz.isDaylightSavingTime(for: transition)
        ]
    }
}
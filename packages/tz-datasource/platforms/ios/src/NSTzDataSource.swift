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
                
                var transition = tz.nextDaylightSavingTimeTransition(after: startPoint)
                if (transition != nil && transition!.timeIntervalSince1970 >= startTimestamp && transition!.timeIntervalSince1970 <= endTimestamp) {
                    var jsonArray: [Any] = []
                    
                    while (transition != nil && transition!.timeIntervalSince1970 >= startTimestamp && transition!.timeIntervalSince1970 <= endTimestamp) {
                        jsonArray.append([
                            transition!.timeIntervalSince1970,
                            tz.abbreviation(for: transition!) ?? "",
                            tz.secondsFromGMT(for: transition!),
                            tz.isDaylightSavingTime(for: transition!)
                        ])
                        transition = tz.nextDaylightSavingTimeTransition(after: transition!)
                    }
                    
                    if let jsonData = try? JSONSerialization.data(withJSONObject: jsonArray) {
                        return NSString.init(data: jsonData, encoding: NSUTF8StringEncoding)
                    }
                }
            }
        }
        
        return nil
    }
}
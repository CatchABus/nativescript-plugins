import Foundation

@objc public class NSIntlUtils: NSObject {
    @objc public static func getAvailableCalendarIds() -> [String] {
        return [
            NSCalendar.Identifier.buddhist.rawValue,
            NSCalendar.Identifier.chinese.rawValue,
            NSCalendar.Identifier.coptic.rawValue,
            NSCalendar.Identifier.ethiopicAmeteAlem.rawValue,
            NSCalendar.Identifier.ethiopicAmeteMihret.rawValue,
            NSCalendar.Identifier.gregorian.rawValue,
            NSCalendar.Identifier.hebrew.rawValue,
            NSCalendar.Identifier.ISO8601.rawValue,
            NSCalendar.Identifier.indian.rawValue,
            NSCalendar.Identifier.islamic.rawValue,
            NSCalendar.Identifier.islamicCivil.rawValue,
            NSCalendar.Identifier.islamicTabular.rawValue,
            NSCalendar.Identifier.islamicUmmAlQura.rawValue,
            NSCalendar.Identifier.japanese.rawValue,
            NSCalendar.Identifier.persian.rawValue,
            NSCalendar.Identifier.republicOfChina.rawValue
        ]
    }
    
    @objc public static func getAvailableCollationIds() -> [String] {
        if #available(iOS 16.0, *) {
            return Locale.Collation.availableCollations.map { $0.identifier }
        }
        return []
    }
    
    @objc public static func getAvailableNumberingSystemIds() -> [String] {
        if #available(iOS 16.0, *) {
            return Locale.NumberingSystem.availableNumberingSystems.map { $0.identifier }
        }
        return []
    }
    
    @objc public static func getAvailableUnitIds() -> [String] {
        return [
            UnitArea.acres.symbol,
            UnitInformationStorage.bits.symbol,
            UnitInformationStorage.bytes.symbol,
            UnitTemperature.celsius.symbol,
            UnitLength.centimeters.symbol,
            // day
            UnitAngle.degrees.symbol,
            UnitTemperature.fahrenheit.symbol,
            UnitVolume.fluidOunces.symbol,
            UnitLength.feet.symbol,
            UnitVolume.gallons.symbol,
            UnitInformationStorage.gigabits.symbol,
            UnitInformationStorage.gigabytes.symbol,
            UnitMass.grams.symbol,
            UnitArea.hectares.symbol,
            UnitDuration.hours.symbol,
            UnitLength.inches.symbol,
            UnitInformationStorage.kilobits.symbol,
            UnitInformationStorage.kilobytes.symbol,
            UnitMass.kilograms.symbol,
            UnitLength.kilometers.symbol,
            UnitVolume.liters.symbol,
            UnitInformationStorage.megabits.symbol,
            UnitInformationStorage.megabytes.symbol,
            UnitLength.meters.symbol,
            UnitDuration.microseconds.symbol,
            UnitLength.miles.symbol,
            UnitLength.scandinavianMiles.symbol,
            UnitVolume.milliliters.symbol,
            UnitLength.millimeters.symbol,
            UnitDuration.milliseconds.symbol,
            UnitDuration.minutes.symbol,
            // month
            UnitDuration.nanoseconds.symbol,
            UnitMass.ounces.symbol,
            // UnitLength.percent.symbol,
            UnitInformationStorage.petabytes.symbol,
            UnitMass.pounds.symbol,
            UnitDuration.seconds.symbol,
            UnitMass.stones.symbol,
            UnitInformationStorage.terabits.symbol,
            UnitInformationStorage.terabytes.symbol,
            // week
            UnitLength.yards.symbol
            // year
        ]
    }
}
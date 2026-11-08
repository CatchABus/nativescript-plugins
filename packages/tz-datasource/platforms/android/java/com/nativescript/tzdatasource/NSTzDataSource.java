package com.nativescript.tzdatasource;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.zone.ZoneOffsetTransition;
import java.time.zone.ZoneRules;
import java.util.Set;

import android.annotation.SuppressLint;
import android.os.Build;
import android.util.Log;

import org.json.JSONArray;

public class NSTzDataSource {
    public static String[] getAvailableZoneIds() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return new String[0];
        }

        Set<String> zoneIdSet = ZoneId.getAvailableZoneIds();
        return zoneIdSet.toArray(new String[zoneIdSet.size()]);
    }

    public static String generateTimeZoneData(String tzName, int fullYearDataRange) {
        if (tzName == null || tzName.isEmpty() || fullYearDataRange < 1 || Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return null;
        }

        ZoneId zId;

        try {
            zId = ZoneId.of(tzName);
        } catch(Exception e) {
            zId = null;
            Log.e("JS", "Failed to parse time zone ID " + tzName + ": " + e);
        }

        if (zId == null) {
            return null;
        }

        ZoneRules rules;

        try {
            rules = zId.getRules();
        } catch(Exception e) {
            rules = null;
            Log.e("JS", "Failed to find rules for time zone ID " + tzName + ": " + e);
        }

        final int yearDataRange = fullYearDataRange / 2;
        final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("z").withZone(zId);
        final ZonedDateTime curZoneDt = Instant.now().atZone(zId);
        final Instant startPoint = curZoneDt.minusYears(yearDataRange).toInstant();
        final Instant endPoint = curZoneDt.plusYears(yearDataRange).toInstant();
        final long startTimestamp = startPoint.getEpochSecond();
        final long endTimestamp = endPoint.getEpochSecond();
        final JSONArray jsonArray = new JSONArray();

        ZoneOffsetTransition transition = rules.nextTransition(startPoint);
        while (transition != null && transition.getInstant().getEpochSecond() >= startTimestamp && transition.getInstant().getEpochSecond() <= endTimestamp) {
            final Instant trInstant = transition.getInstant();
            jsonArray.put(createJSONZoneEntry(trInstant, formatter, rules));
            transition = rules.nextTransition(trInstant);
        }

        /**
         * Handle cases of zone IDs without transitions in the specified year range.
         * In such cases, this method will return the timezone data as fallback using the range start timestamp as transition point.
         */
        if (jsonArray.length() == 0) {
            jsonArray.put(createJSONZoneEntry(startPoint, formatter, rules));
        }

        return jsonArray.toString();
    }

    @SuppressLint("NewApi")
    private static JSONArray createJSONZoneEntry(Instant instant, DateTimeFormatter formatter, ZoneRules zoneRules) {
        final JSONArray jsonEntry = new JSONArray();

        jsonEntry.put(instant.getEpochSecond());
        jsonEntry.put(formatter.format(instant));
        jsonEntry.put(zoneRules.getOffset(instant).getTotalSeconds());
        jsonEntry.put(zoneRules.isDaylightSavings(instant));

        return jsonEntry;
    }
}
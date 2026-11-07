package com.nativescript.tzdatasource;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.zone.ZoneOffsetTransition;
import java.time.zone.ZoneRules;
import java.util.Set;

import android.util.Log;

import org.json.JSONArray;

public class NSTzDataSource {
    public static String[] getAvailableZoneIds() {
        Set<String> zoneIdSet = ZoneId.getAvailableZoneIds();
        return zoneIdSet.toArray(new String[zoneIdSet.size()]);
    }
    
    public static String generateTimeZoneData(String tzName, int fullYearDataRange) {
        if (tzName == null || tzName.isEmpty() || fullYearDataRange <= 0) {
            return null;
        }

        ZoneId zId;

        try {
            zId = ZoneId.of(tzName);
        } catch(Exception e) {
            zId = null;
            Log.e("JS", "Failed to parse zone ID " + tzName + ": " + e);
        }

        if (zId == null) {
            return null;
        }

        final int yearDataRange = fullYearDataRange / 2;
        final ZoneRules rules = zId.getRules();
        final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("z").withZone(zId);
        final ZonedDateTime curZoneDt = Instant.now().atZone(zId);
        final Instant startPoint = curZoneDt.minusYears(yearDataRange).toInstant();
        final Instant endPoint = curZoneDt.plusYears(yearDataRange).toInstant();
        final long startTimestamp = startPoint.getEpochSecond();
        final long endTimestamp = endPoint.getEpochSecond();
        ZoneOffsetTransition transition = rules.nextTransition(startPoint);

        if (transition != null && transition.getInstant().getEpochSecond() >= startTimestamp && transition.getInstant().getEpochSecond() <= endTimestamp) {
            final JSONArray jsonArray = new JSONArray();

            while (transition != null && transition.getInstant().getEpochSecond() >= startTimestamp && transition.getInstant().getEpochSecond() <= endTimestamp) {
                final Instant trInstant = transition.getInstant();
                final JSONArray jsonEntry = new JSONArray();

                jsonEntry.put(trInstant.getEpochSecond());
                jsonEntry.put(formatter.format(trInstant));
                jsonEntry.put(rules.getOffset(trInstant).getTotalSeconds());
                jsonEntry.put(rules.isDaylightSavings(trInstant));
                jsonArray.put(jsonEntry);

                transition = rules.nextTransition(trInstant);
            }

            return jsonArray.toString();
        }

        return null;
    }
}

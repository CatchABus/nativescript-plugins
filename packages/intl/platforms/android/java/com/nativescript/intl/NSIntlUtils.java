package com.nativescript.intl;

import java.util.HashSet;
import java.util.Set;

import android.icu.util.MeasureUnit;
import android.icu.util.ULocale;
import android.os.Build;

public class NSIntlUtils {
    public static String canonicalizeLocaleString(String str) {
        return ULocale.forLanguageTag(str).toLanguageTag();
    }

    public synchronized static String[] getAvailableUnitIds() {
        final Set<String> result = new HashSet<>();

        for (String type : new HashSet<>(MeasureUnit.getAvailableTypes())) {
            for (MeasureUnit unit : MeasureUnit.getAvailable(type)) {
                result.add(unit.getSubtype());
            }
        }
        return result.toArray(new String[result.size()]);
    }
}
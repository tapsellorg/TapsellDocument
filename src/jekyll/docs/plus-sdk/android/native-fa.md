---
layout: classic-docs
title: پیاده سازی تبلیغات همسان
lang: fa
permalink: /plus-sdk/android/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### ساخت AdHolder
در صفحه‌ای که قصد دارید بنر همسان نمایش بدهید باید یک `ViewGroup` به عنوان فضایی که قصد دارید تبلیغات در آن نمایش داده شود اضافه کنید (adContainer).

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <FrameLayout
        android:id="@+id/adContainer"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

    </FrameLayout>

</FrameLayout>
```

سپس یک `layout` دلخواه مطابق شکلی که قصد دارید تبلیغ نمایش داده شود بسازید که `rootView` از نوع `com.google.android.gms.ads.formats.UnifiedNativeAdView`  باشد و `id` و نوع بخش‌های مختلف مطابق با جدول زیر باشد:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `tapsell_nativead_logo`    | `ImageView`  |
|     title    |    `tapsell_nativead_title`    | `TextView`  |
| ad indicator |  `tapsell_nativead_sponsored`  | `View`  |
|  description | `tapsell_nativead_description` | `TextView`  |
|    banner    |    `tapsell_nativead_banner`   | `ir.tapsell.sdk.nativeads.views.RatioImageView`  |
|  media view  |`tapsell_nativead_banner_admob` | `com.google.android.gms.ads.formats.MediaView`  |
|    button    |     `tapsell_nativead_cta`     | `TextView`  |
|    clickable view    |     `tapsell_nativead_cta_view`     | `View`  |


* در صورتی که در طراحی دکمه‌ای برای کلیک کردن وجود ندارد میتوانید از **clickable view** استفاده کنید.
* نوع ویوها میتواند از نوع‌های گفته شده ارث بری کرده باشند.
* باید ۲ ویو را برای نمایش عکس تبلیغات اختصاص بدهید. یکی از نوع `ir.tapsell.sdk.nativeads.views.RatioImageView` برای تپسل و دیگری از نوع `com.google.android.gms.ads.formats.MediaView` برای AdMob این دو میتواند دقیقا روی هم قرار بگیرد. تپسل پلاس با توجه به تبلیغ آماده نمایش ویو مورد نظر را نمایش میدهد.
- از نسخه 1.2.3-rc4  در صورتی که از layout ‌پیش فرض استفاده نمیکنید و خودتان layoutای را طراحی و پیاده‌سازی نموده‌اید، به جای com.google.android.gms.ads.formats.MediaView از ir.tapsell.plus.imp.admob.AdMobMediaView استفاده نمایید.
* می‌توانید از view‌ای که برای این منظور از قبل آماده شده با id زیر استفاده کنید یا به عنوان راهنمایی در ساخت کمک بگیرید.
`native_banner`

مطابق قطعه کد زیر `adContainer` و شناسه layout تبلیغ را به تپسل پلاس بدهید تا یک `AdHolder` بسازید.

```java
import ir.tapsell.plus.AdHolder;
import ir.tapsell.plus.TapsellPlus;
...
ViewGroup adContainer = findViewById(R.id.adContainer);
...
AdHolder adHolder = TapsellPlus.createAdHolder(
      CONTEXT, adContainer, R.layout.native_banner);
```

### درخواست تبلیغ
با کمک متد `TapsellPlus.requestNativeBanner` و به روش زیر درخواست تبلیغ بدهید.

```java
import ir.tapsell.plus.AdRequestCallback;
import ir.tapsell.plus.TapsellPlus;
.......
private void requestAd() {
    TapsellPlus.requestNativeBanner(
        CONTEXT,
        ZONE_ID_NATIVE,
        new AdRequestCallback() {
            @Override
            public void response() {
                //ad is ready to show
            }

            @Override
            public void error(String message) {
            }
    });
}
```

### نمایش تبلیغ
بعد از اجرای متد `response` تبلیغ آماده نمایش است و میتوانید مطابق روش زیر نمایش دهید.

```java
private void showAd() {
    TapsellPlus.showAd(activity, adHolder, ZONE_ID_NATIVE);
}
```

### رخدادها
میتوانید با کمک `AdShowListener` به روش زیر در زمان نمایش تبلیغ از نمایش تبلیغ و رخ دادن خطا مطلع بشید.

```java
import ir.tapsell.plus.AdShowListener;
.......
private void showAd() {
    TapsellPlus.showAd(
        ACTIVITY,
        ZONE_ID_NATIVE,
        new AdShowListener() {
            @Override
            public void onOpened() {
                //ad opened
            }

            @Override
            public void onError(String message) {
                //error
            }
    });
}
```
---
layout: classic-docs
title: پیاده سازی تبلیغات همسان
lang: fa
permalink: /plus-sdk/android/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه (zone) همسان بسازید و `zoneId` را زمان درخواست تبلیغ استفاده کنید.

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

سپس یک `layout` دلخواه مطابق شکلی که قصد دارید تبلیغ نمایش داده شود بسازید که `rootView` از نوع `com.google.android.gms.ads.nativead.NativeAdView`  باشد و `id` و نوع بخش‌های مختلف مطابق با جدول زیر باشد:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `tapsell_nativead_logo`    | `ImageView`  |
|     title    |    `tapsell_nativead_title`    | `TextView`  |
| ad indicator |  `tapsell_nativead_sponsored`  | `View`  |
|  description | `tapsell_nativead_description` | `TextView`  |
|    banner    |    `tapsell_nativead_banner`   | `ir.tapsell.sdk.nativeads.views.RatioImageView`  |
|  media view  |`tapsell_nativead_banner_admob` | `ir.tapsell.plus.imp.admob.AdMobMediaView`  |
|    button    |     `tapsell_nativead_cta`     | `TextView`  |
|    clickable view    |     `tapsell_nativead_cta_view`     | `View`  |


* در صورتی که در طراحی دکمه‌ای برای کلیک کردن وجود ندارد میتوانید از **clickable view** استفاده کنید.
* نوع ویوها میتواند از نوع‌های گفته شده ارث بری کرده باشند.
* باید ۲ ویو را برای نمایش عکس تبلیغات اختصاص بدهید. یکی از نوع `ir.tapsell.sdk.nativeads.views.RatioImageView` برای تپسل و دیگری از نوع `ir.tapsell.plus.imp.admob.AdMobMediaView` برای AdMob این دو میتواند دقیقا روی هم قرار بگیرد. تپسل پلاس با توجه به تبلیغ آماده نمایش ویو مورد نظر را نمایش میدهد.
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
با کمک متد `TapsellPlus.requestNativeAd` و به روش زیر درخواست تبلیغ بدهید.

```java
import ir.tapsell.plus.AdRequestCallback;
import ir.tapsell.plus.TapsellPlus;
.......
private void requestAd() {
    TapsellPlus.requestNativeAd(
                CONTEXT,
                ZONE_ID_NATIVE,
                new AdRequestCallback() {
                    @Override
                    public void response(String responseId) {
                        super.response(responseId);

                        //Ad is ready to show
                        //Put the ad's responseId to your responseId variable
                        nativeAdResponseId = s;
                        showAd();
                    }

                    @Override
                    public void error(@NonNull String message) {
                    }
                });
}
```

>اگر تمایل دارید در کالبک error مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک error مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

### نمایش تبلیغ
بعد از اجرای متد `response` تبلیغ آماده نمایش است و می‌توانید مطابق روش زیر نمایش دهید.

```java
private void showAd() {
    TapsellPlus.showNativeAd(CONTEXT, nativeAdResponseId, adHolder,
                new AdShowListener() {
                    @Override
                    public void onOpened(TapsellPlusAdModel tapsellPlusAdModel) {
                        super.onOpened(tapsellPlusAdModel);
                    }

                    @Override
                    public void onError(TapsellPlusErrorModel tapsellPlusErrorModel) {
                        super.onError(tapsellPlusErrorModel);
                    }
                });
}
```

### حذف تبلیغ
در پایان چرخه‌ی حیات اکتیویتی، می‌بایستی متد زیر را صدا بزنید:
```java
private void destroyAd() {
    TapsellPlus.destroyNativeBanner(CONTEXT, nativeAdResponseId);
}

// For example in Activity's onDestory method
@Override
protected void onDestroy() {
    destroyAd();
    super.onDestroy();
}
```

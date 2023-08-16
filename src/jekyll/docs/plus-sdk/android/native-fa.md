---
layout: classic-docs
title: پیاده سازی تبلیغات همسان
lang: fa
permalink: /plus-sdk/android/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.irancell.ir/) یک تبلیغ‌گاه (zone) همسان بسازید و `zoneId` را زمان درخواست تبلیغ استفاده کنید.

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
|     logo     |     `Yelloadwise_nativead_logo`    | `ImageView`  |
|     title    |    `Yelloadwise_nativead_title`    | `TextView`  |
| ad indicator |  `Yelloadwise_nativead_sponsored`  | `View`  |
|  description | `Yelloadwise_nativead_description` | `TextView`  |
|    banner    |    `Yelloadwise_nativead_banner`   | `ir.yelloadwise.core.nativeads.views.RatioImageView`  |
|  media view  |`Yelloadwise_nativead_banner_admob` | `ir.yelloadwise.adNetworks.admob.AdMobMediaView`  |
|    button    |     `Yelloadwise_nativead_cta`     | `TextView`  |
|    clickable view    |     `Yelloadwise_nativead_cta_view`     | `View`  |


* در صورتی که در طراحی دکمه‌ای برای کلیک کردن وجود ندارد میتوانید از **clickable view** استفاده کنید.
* نوع ویوها میتواند از نوع‌های گفته شده ارث بری کرده باشند.
* باید ۲ ویو را برای نمایش عکس تبلیغات اختصاص بدهید. یکی از نوع `ir.yelloadwise.core.nativeads.views.RatioImageView` برای یلوادوایز و دیگری از نوع `ir.yelloadwise.adNetworks.admob.AdMobMediaView` برای AdMob این دو میتواند دقیقا روی هم قرار بگیرد. یلوادوایز با توجه به تبلیغ آماده نمایش ویو مورد نظر را نمایش میدهد.
> از نسخه 1.2.3-rc4  در صورتی که از layout ‌پیش فرض استفاده نمیکنید و خودتان layoutای را طراحی و پیاده‌سازی نموده‌اید، به جای `com.google.android.gms.ads.formats.MediaView` از `ir.yelloadwise.adNetworks.admob.AdMobMediaView` استفاده نمایید.
* می‌توانید از view‌ای که برای این منظور از قبل آماده شده با id زیر استفاده کنید یا به عنوان راهنمایی در ساخت کمک بگیرید.
`native_banner`

مطابق قطعه کد زیر `adContainer` و شناسه layout تبلیغ را به یلوادوایز بدهید تا یک `AdHolder` بسازید.

```java
import ir.yelloadwise.AdHolder;
import ir.Yelloadwise.Yelloadwise;
...
ViewGroup adContainer = findViewById(R.id.adContainer);
...
AdHolder adHolder = Yelloadwise.createAdHolder(
      CONTEXT, adContainer, R.layout.native_banner);
```

### درخواست تبلیغ
با کمک متد `Yelloadwise.requestNativeAd` و به روش زیر درخواست تبلیغ بدهید.

```java
import ir.yelloadwise.AdRequestCallback;
import ir.yelloadwise.Yelloadwise;
.......
private void requestAd() {
    Yelloadwise.requestNativeAd(
                CONTEXT,
                ZONE_ID_NATIVE,
                new AdRequestCallback() {
                    @Override
                    public void response(YelloadwiseAdModel yelloadwiseAdModel) {
                        super.response(yelloadwiseAdModel);

                        //Ad is ready to show
                        //Put the ad's responseId to your responseId variable
                        nativeAdResponseId = yelloadwiseAdModel.getResponseId();
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
    Yelloadwise.showNativeAd(CONTEXT, nativeAdResponseId, adHolder,
                new AdShowListener() {
                    @Override
                    public void onOpened(YelloadwiseAdModel yelloadwiseAdModel) {
                        super.onOpened(yelloadwiseAdModel);
                    }

                    @Override
                    public void onError(YelloadwiseErrorModel yelloadwiseErrorModel) {
                        super.onError(yelloadwiseErrorModel);
                    }
                });
}
```

### حذف تبلیغ
در پایان چرخه‌ی حیات اکتیویتی، می‌بایستی متد زیر را صدا بزنید:
```java
private void destroyAd() {
    Yelloadwise.destroyNativeBanner(CONTEXT, nativeAdResponseId);
}

// For example in Activity's onDestory method
@Override
protected void onDestroy() {
    destroyAd();
    super.onDestroy();
}
```

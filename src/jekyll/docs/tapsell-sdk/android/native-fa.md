---
layout: classic-docs
title: پیاده سازی تبلیغات همسان
lang: fa
permalink: /yelloadwise-app/android/native/index.html
toc: true
---

### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://business.yelloadwise.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

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

نمونه قالب‌های طراحی شده پیش‌فرض برای نمایش تبلیغات همسان در فایل‌های `yelloadwise_content_banner_ad_template` و `yelloadwise_app_installation_banner_ad_template` قابل مشاهده هستند.

اگر قصد تغییر قالب پیش فرض را دارید، یک `layout` دلخواه  بسازید و `id` و نوع بخش‌های مختلف را مطابق جدول زیر تغییر دهید:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `yelloadwise_nativead_logo`    | `ImageView`  |
|     title    |    `yelloadwise_nativead_title`    | `TextView`  |
| ad indicator |  `yelloadwise_nativead_sponsored`  | `View`  |
|  description | `yelloadwise_nativead_description` | `TextView`  |
|    banner    |    `yelloadwise_nativead_banner`   | `ir.yelloadwise.app.nativeads.views.RatioImageView`  |
|    button    |     `yelloadwise_nativead_cta`     | `TextView`  |
|    clickable view    |     `yelloadwise_nativead_cta_view`     | `View`  |


* در صورتی که در طراحی دکمه‌ای برای کلیک کردن وجود ندارد می‌توانید از **clickable view** استفاده کنید.
* نوع ویوها میتواند از نوع‌های گفته شده ارث بری کرده باشند.



مطابق قطعه کد زیر `adContainer` و شناسه layout تبلیغ را به یلوادوایز بدهید تا یک `YelloadwiseNativeBannerViewManager` بسازید.

```java
import ir.yelloadwise.app.nativeads.YelloadwiseNativeBannerManager;
import ir.yelloadwise.app.nativeads.YelloadwiseNativeBannerViewManager;;
...
ViewGroup adContainer = findViewById(R.id.adContainer);
...
YelloadwiseNativeBannerViewManager nativeBannerViewManager = new YelloadwiseNativeBannerManager
    .Builder()
    .setParentView(adContainer)
    .setContentViewTemplate(R.layout.yelloadwise_content_banner_ad_template)
    .setAppInstallationViewTemplate(R.layout.yelloadwise_app_installation_banner_ad_template)
    .inflateTemplate(CONTEXT);
```

### درخواست تبلیغ
با کمک متد `getAd` و به روش زیر درخواست تبلیغ بدهید.

```java
import ir.yelloadwise.app.AdRequestCallback;
import ir.yelloadwise.app.nativeads.YelloadwiseNativeBannerManager;
.......
private void requestAd() {
    YelloadwiseNativeBannerManager.getAd(CONTEXT, ZONE_ID_NATIVE,
                new AdRequestCallback() {
                    @Override
                    public void onResponse(String[] adId) {
                        //ad is ready to show
                    }

                    @Override
                    public void onFailed(String message) {
                        
                    }
                });
}
```

>اگر تمایل دارید در کالبک onFailed مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک onFailed مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

### نمایش تبلیغ
بعد از اجرای متد `onResponse` تبلیغ آماده نمایش است و می‌توانید مطابق روش زیر نمایش دهید.

```java
import ir.yelloadwise.app.nativeads.YelloadwiseNativeBannerManager;
........
private void showAd() {
    YelloadwiseNativeBannerManager.bindAd(
                CONTEXT,
                nativeBannerViewManager,
                ZONE_ID_NATIVE,
                adId[0]);
}                
```

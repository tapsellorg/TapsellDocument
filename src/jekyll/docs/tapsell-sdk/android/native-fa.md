---
layout: classic-docs
title: پیاده سازی تبلیغات همسان
lang: fa
permalink: /tapsell-sdk/android/native/index.html
toc: true
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از تپسل استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.tapsell.ir/plus-sdk/android/native/">تپسل‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">تپسل پلاس، علاوه بر دارا بودن تمام امکانات تپسل، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده تپسل در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>

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

نمونه قالب‌های طراحی شده پیش‌فرض برای نمایش تبلیغات همسان در فایل‌های `tapsell_content_banner_ad_template` و `tapsell_app_installation_banner_ad_template` قابل مشاهده هستند.

اگر قصد تغییر قالب پیش فرض را دارید، یک `layout` دلخواه  بسازید و `id` و نوع بخش‌های مختلف را مطابق جدول زیر تغییر دهید:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `tapsell_nativead_logo`    | `ImageView`  |
|     title    |    `tapsell_nativead_title`    | `TextView`  |
| ad indicator |  `tapsell_nativead_sponsored`  | `View`  |
|  description | `tapsell_nativead_description` | `TextView`  |
|    banner    |    `tapsell_nativead_banner`   | `ir.tapsell.sdk.nativeads.views.RatioImageView`  |
|    button    |     `tapsell_nativead_cta`     | `TextView`  |
|    clickable view    |     `tapsell_nativead_cta_view`     | `View`  |


* در صورتی که در طراحی دکمه‌ای برای کلیک کردن وجود ندارد می‌توانید از **clickable view** استفاده کنید.
* نوع ویوها میتواند از نوع‌های گفته شده ارث بری کرده باشند.



مطابق قطعه کد زیر `adContainer` و شناسه layout تبلیغ را به تپسل بدهید تا یک `TapsellNativeBannerViewManager` بسازید.

```java
import ir.tapsell.sdk.nativeads.TapsellNativeBannerManager;
import ir.tapsell.sdk.nativeads.TapsellNativeBannerViewManager;;
...
ViewGroup adContainer = findViewById(R.id.adContainer);
...
TapsellNativeBannerViewManager nativeBannerViewManager = new TapsellNativeBannerManager
    .Builder()
    .setParentView(adContainer)
    .setContentViewTemplate(R.layout.tapsell_content_banner_ad_template)
    .setAppInstallationViewTemplate(R.layout.tapsell_app_installation_banner_ad_template)
    .inflateTemplate(CONTEXT);
```

### درخواست تبلیغ
با کمک متد `getAd` و به روش زیر درخواست تبلیغ بدهید.

```java
import ir.tapsell.sdk.AdRequestCallback;
import ir.tapsell.sdk.nativeads.TapsellNativeBannerManager;
.......
private void requestAd() {
    TapsellNativeBannerManager.getAd(CONTEXT, ZONE_ID_NATIVE,
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
import ir.tapsell.sdk.nativeads.TapsellNativeBannerManager;
........
private void showAd() {
    TapsellNativeBannerManager.bindAd(
                CONTEXT,
                nativeBannerViewManager,
                ZONE_ID_NATIVE,
                adId[0]);
}                
```
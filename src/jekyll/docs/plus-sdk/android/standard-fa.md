---
layout: classic-docs
title: پیاده سازی تبلیغات بنر استاندارد
lang: fa
permalink: /plus-sdk/android/standard/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.yelloadwise.ir/) یک تبلیغگاه (zone) بنر استاندارد بسازید و `zoneId` را زمان درخواست تبلیغ استفاده کنید.

### درخواست تبلیغ
مطابق کد زیر می‌توانید با استفاد از متد Yelloadwise.requestStandardBannerAd  درخواست تبلیغ بدهید.

```java
Yelloadwise.requestStandardBannerAd(
                CONTEXT, ZONE_ID_STANDARD_BANNER,
                YelloadwiseBannerType.BANNER_320x50,
                new AdRequestCallback() {
                    @Override
                    public void response(YelloadwiseAdModel yelloadwiseAdModel) {
                        super.response(yelloadwiseAdModel);
                        
                        //Ad is ready to show
                        //Put the ad's responseId to your responseId variable
                        standardBannerResponseId = yelloadwiseAdModel.getResponseId();
                    }

                    @Override
                    public void error(@NonNull String message) {
                    }
                });
```

>اگر تمایل دارید در کالبک error مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک error مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

### نمایش تبلیغ
در صفحه‌ای که می‌خواهید تبلیغ نمایش داده شود یک `ViewGroup` اضافه کنید.

```xml
<RelativeLayout
    android:id="@+id/standardBanner"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="center"
    android:gravity="center" />
```

بعد از اجرای متد `response` تبلیغ آماده نمایش است و می‌توانید مطابق روش زیر نمایش دهید.
```java
Yelloadwise.showStandardBannerAd(CONTEXT, standardBannerResponseId,
                findViewById(R.id.standardBanner),
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
```

### حذف تبلیغ
در پایان چرخه‌ی حیات اکتیویتی یا هر زمان که قصد داشتید تبلیغ بسته شود، می‌بایستی متد زیر را صدا بزنید:
```java
private void destroyAd() {
    Yelloadwise.destroyStandardBanner(this, standardBannerResponseId, findViewById(R.id.standardBanner));
}

// For example in Activity's onDestory method
@Override
protected void onDestroy() {
    destroyAd();
    super.onDestroy();
}
```

### سایز بنرها
تمامی سایزهای قابل پشتیبانی در یلوادوایز در کلاس YelloadwiseBannerType قرار دارند.

|نوع بنر|اندازه|شبکه‌های پشتیبانی شده|
|:----------------:|:-------------:|:------------------:|
| `BANNER_320x50` | `320x50` |       یلوادوایز، AdMob، AppLovin، UnityAds، AdColony    |
| `BANNER_320x100` | `320x100` |      یلوادوایز، AdMob    |
| `BANNER_250x250` | `250x250` |    یلوادوایز  |
| `BANNER_300x250` | `300x250` |   یلوادوایز، AdMob، AppLovin، AdColony |
| `BANNER_468x60` | `468x60` |      AdMob، UnityAds   |
| `BANNER_728x90` | `728x90` |     AdMob، AppLovin، UnityAds، AdColony |
| `BANNER_160x600` | `160x600` |     AdColony |

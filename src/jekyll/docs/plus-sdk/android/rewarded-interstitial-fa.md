---
layout: classic-docs
title: پیاده سازی تبلیغات جایزه‌ای/آنی
lang: fa
permalink: /plus-sdk/android/rewarded-interstitial/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) جایزه‌ای/آنی بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### درخواست تبلیغ
مطابق کد زیر میتوانید با استفاد از متد `TapsellPlus.requestRewardedVideo` درخواست تبلیغ بدهید.
```java
import ir.tapsell.plus.AdRequestCallback;
import ir.tapsell.plus.TapsellPlus;
.......
private void requestAd() {
    TapsellPlus.requestRewardedVideo(
        CONTEXT,
        ZONE_ID_REWARDED_VIDEO,
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

برای تبلیغ آنی از متد `TapsellPlus.requestInterstitial` استفاده کنید.

>اگر تمایل دارید در کالبک error مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک error مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

### نمایش تبلیغ
بعد از اجرای متد `response` تبلیغ آماده نمایش است و میتوانید مطابق روش زیر نمایش دهید.

```java
private void showAd() {
    TapsellPlus.showAd(ACTIVITY, ZONE_ID_REWARDED_VIDEO);
}
```

### رخدادها
میتوانید با کمک `AdShowListener` به روش زیر در زمان نمایش تبلیف از باز و بسته شدن تبلیغ و دادن جایزه به یوزر مطلع بشید.

```java
import ir.tapsell.plus.AdShowListener;
.......
private void showAd() {
    TapsellPlus.showAd(
        ACTIVITY,
        ZONE_ID_REWARDED_VIDEO,
        new AdShowListener() {
            @Override
            public void onOpened() {
                //ad opened
            }

            @Override
            public void onClosed() {
                //ad closed
            }

            @Override
            public void onRewarded() {
                //reward
            }

            @Override
            public void onError(String message) {
                //error
            }
    });
}
```
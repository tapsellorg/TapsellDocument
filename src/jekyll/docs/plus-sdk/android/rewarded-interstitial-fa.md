---
layout: classic-docs
title: پیاده سازی تبلیغات جایزه‌ای/آنی
lang: fa
permalink: /plus-sdk/android/rewarded-interstitial/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) جایزه‌ای/آنی بسازید و `zoneId` را زمان درخواست تبلیغ استفاده کنید.

### درخواست تبلیغ
مطابق کد زیر می‌توانید با استفاد از متد `TapsellPlus.requestRewardedVideoAd` درخواست تبلیغ بدهید.
```java
import ir.tapsell.plus.AdRequestCallback;
import ir.tapsell.plus.TapsellPlus;
.......
private void requestAd() {
    TapsellPlus.requestRewardedVideoAd(
        CONTEXT,
        ZONE_ID_REWARDED_VIDEO,
        new AdRequestCallback() {
            @Override
            public void response(TapsellPlusAdModel tapsellPlusAdModel) {
                super.response(tapsellPlusAdModel);
                
                //Ad is ready to show
                //Put the ad's responseId to your responseId variable
                rewardedResponseId = tapsellPlusAdModel.getResponseId();
            }

            @Override
            public void error(String message) {
            }

    });
}
```

برای تبلیغ آنی از متد `TapsellPlus.requestInterstitialAd` استفاده کنید.

>اگر تمایل دارید در کالبک error مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک error مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

### نمایش تبلیغ
بعد از اجرای متد `response` و دریافت پارامتر `responseId` تبلیغ آماده نمایش است و می‌توانید مطابق روش زیر آن را نمایش دهید.

```java
import ir.tapsell.plus.AdShowListener;
.......
TapsellPlus.showRewardedVideoAd(CONTEXT, rewardedResponseId,
                new AdShowListener() {
                    @Override
                    public void onOpened(TapsellPlusAdModel tapsellPlusAdModel) {
                        super.onOpened(tapsellPlusAdModel);
                    }

                    @Override
                    public void onClosed(TapsellPlusAdModel tapsellPlusAdModel) {
                        super.onClosed(tapsellPlusAdModel);
                    }

                    @Override
                    public void onRewarded(TapsellPlusAdModel tapsellPlusAdModel) {
                        super.onRewarded(tapsellPlusAdModel);
                    }

                    @Override
                    public void onError(TapsellPlusErrorModel tapsellPlusErrorModel) {
                        super.onError(tapsellPlusErrorModel);
                    }
                });
```
برای تبلیغ آنی از متد `TapsellPlus.showInterstitialAd`  استفاده کنید. همچنین در تبلیغ آنی نیازی به کالبک `onReward` ندارید و می‌توانید آن را پاک کنید.

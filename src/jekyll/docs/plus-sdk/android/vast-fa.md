---
layout: classic-docs
title: پیاده سازی تبلیغات VAST
lang: fa
permalink: /plus-sdk/android/vast/index.html
toc: true
---

### تبلیغات خطی
به تبلیغات ویدیویی که ابتدا، میان و یا حتی آخر یک کلیپ فیلم ظاهر می‌شوند تبلیغات خطی گفته می‌شود.

### تبلیغات Pre-Roll
به تبلیغات ویدیویی که ابتدای پخش یک فیلم ظاهر می‌شود، تبلیغات Pre-Roll گفته می‌شود.
در حال حاضر SDK تپسل پلاس از تبلیغات Pre-Roll پشتیبانی می‌کند که برای استفاده از آن می‌توانید مطابق مستندات زیر عمل نمایید:

### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) از نوع VAST (پیش نمایشی/preroll) بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### درخواست و نمایش تبلیغ
برای نمایش تبلیغات VAST لازم است از کتابخانه IMA گوگل استفاده کنید.  
مستندات کتابخانه IMA را می‌توانید از [این لینک](https://developers.google.com/interactive-media-ads/docs/sdks/android) ببینید.  
در صورتی که قصد استفاده از یک Video Player به جز ExoPlayer دارید هم می‌توانید از [این لینک](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/custom_ad_playback) کمک بگیرید.

در IMA برای نمایش تبلیغ به `ad tag URL` نیاز دارید. برای این منظور می‌توانید از روش زیر استفاده کنید.

```java
TapsellPlus.getVastTag(ZONE_ID)
```
بقیه مراحل پیاده سازی را مطابق مستندات IMA  یا پروژه‌ی نمونه‌ی تپسل پلاس پیش بروید.

### تبلیغات همراه (Companion Ads)
تبلیغاتی بنری هستند که در کنار تبلیغ ویدیویی نمایش داده می‌شوند.
برای پیاده‌سازی این نوع تبلیغات می‌توانید از [لینک مستندات آن](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/companions) در کتابخانه‌ی IMA گوگل استفاده نمایید.
تپسل نیز این نوع تبلیغات را پشتیبانی می‌کند و می‌توانید مطابق مستندات گوگل و نیز پروژه‌ی نمونه تپسل پلاس آن را به پروژه‌ی خود اضافه نمایید.

### درخواست تبلیغ از کتابخانه تپسل

```java
TapsellPrerollAd tapsellPrerollAd = TapsellPlus.requestVastAd(
        activity,
        playerView, // VideoPlayer || StyledPlayerView (ExoPlayer)
        VIDEO_URL,
        adContainer, // ViewGroup for ad content
        companionContainer, ViewGroup for comapnion ad
        new VastRequestListener() {
            @Override
            public void onAdsLoaderCreated(ImaAdsLoader adsLoader) {
              // AdsLoader is created, you can use it to load ads in your player
            }

            @Override
            public void onAdEvent(AdEvent adEvent) {
              // AdEvent is received, you can use it to handle ad events
            }

            @Override
            public void onAdError(AdErrorEvent adErrorEvent) {
              // AdErrorEvent is received, you can use it to handle ad errors
            }
        });
```

### پروژه‌ی نمونه
برای راهنمایی بیش‌تر می‌توانید از [پروژه‌‌ی نمونه‌ی ما](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/src/main/java/ir/tapsell/plussample/android/ExoPlayerVastActivity.java) بر روی Github استفاده نمایید.
 

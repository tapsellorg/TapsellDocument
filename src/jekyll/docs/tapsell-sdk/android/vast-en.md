---
layout: classic-docs
title: پیاده سازی تبلیغات VAST
lang: fa
permalink: /tapsell-sdk/android/vast/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) از نوع VAST (پیش نمایشی/preroll) بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### درخواست و نمایش تبلیغ
برای نمایش تبلیغات VAST لازمه از کتابخونه IMA گوگل استفاده کنید.  
مستندات کتابخونه IMA را می‌تونید از [این لینک](https://developers.google.com/interactive-media-ads/docs/sdks/android) ببنید.  

در IMA برای نمایش تبلیغ به `ad tag url` نیاز دارید. برای این منظور می‌توانید از روش زیر استفاده کنید.

```java
Tapsell.getVastTag(ZONE_ID)
```
بقیه مراحل پیاده سازی را مطابق مستندات IMA پیش بروید.  
---
layout: classic-docs
title: پیاده سازی تبلیغات VAST
lang: fa
permalink: /yelloadwise-app/android/vast/index.html
toc: true
---

### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://business.yelloadwise.ir/) یک تبلیغگاه (zone) از نوع VAST (پیش نمایشی/preroll) بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### درخواست و نمایش تبلیغ
برای نمایش تبلیغات VAST لازم است از کتابخانه IMA گوگل استفاده کنید.  
مستندات کتابخانه IMA را می‌توانید از [این لینک](https://developers.google.com/interactive-media-ads/docs/sdks/android) ببینید.  

در IMA برای نمایش تبلیغ به `ad tag url` نیاز دارید. برای این منظور می‌توانید از روش زیر استفاده کنید.

```java
Yelloadwise.getVastTag(ZONE_ID)
```
بقیه مراحل پیاده سازی را مطابق مستندات IMA پیش بروید.  

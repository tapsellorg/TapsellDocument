---
layout: classic-docs
title: پیاده سازی تبلیغات VAST
lang: fa
permalink: /tapsell-sdk/android/vast/index.html
toc: true
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از تپسل استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.tapsell.ir/plus-sdk/android/vast/">تپسل‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">تپسل پلاس، علاوه بر دارا بودن تمام امکانات تپسل، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده تپسل در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>

### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) از نوع VAST (پیش نمایشی/preroll) بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### درخواست و نمایش تبلیغ
برای نمایش تبلیغات VAST لازم است از کتابخانه IMA گوگل استفاده کنید.  
مستندات کتابخانه IMA را می‌توانید از [این لینک](https://developers.google.com/interactive-media-ads/docs/sdks/android) ببینید.  

در IMA برای نمایش تبلیغ به `ad tag url` نیاز دارید. برای این منظور می‌توانید از روش زیر استفاده کنید.

```java
Tapsell.getVastTag(ZONE_ID)
```
بقیه مراحل پیاده سازی را مطابق مستندات IMA پیش بروید.  
---
layout: classic-docs
title: بنر استاندارد در React Native
lang: fa
permalink: /yelloadwise-core/reactnative/standard/index.html
toc: true # table of contents
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از یلوادوایز استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.irancell.ir/plus-sdk/reactnative/main/">یلوادوایز‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">یلوادوایز، علاوه بر دارا بودن تمام امکانات یلوادوایز، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده یلوادوایز در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>

## ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.irancell.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.


## درخواست تبلیغ
ابتدا ماژول یلوادوایز و کامپوننت BannerAd را به کد خود اضافه کنید:


```javascript
import Yelloadwise, { BannerAd } from 'react-native-yelloadwise'
```

جهت نمایش بنر استاندارد، باید محلی برای نمایش آن در صفحه در نظر بگیرید. بنر استاندارد، دارای سایزهای استانداردی است که در SDK یلوادوایز مشخص شده‌اند. جهت نمایش بنر، از `component` زیر استفاده کنید:

```xml
<BannerAd
  zoneId={STANDARD_BANNER_ZONE_ID}
  bannerType={Yelloadwise.BANNER_300x250}
  />
```

مقدار `zoneId` کلیدی ست که بعد از ساخت اپلیکیشن در پنل و ثبت یک `zone` از نوع بنری استاندارد دریافت میکنید. با تغییر فیلد `zoneId` تبلیغ بارگزاری می‌شود.

ورودی `BannerType` اندازه‌های مختلف را بیان میکند و شامل مقادیر زیر می‌باشد:

| `BannerType.BANNER_320x50` | `320x50` |
| `BannerType.BANNER_320x100` | `320x100` |
| `BannerType.BANNER_250x250` | `250x250` |
| `BannerType.BANNER_300x250` | `300x250` |  

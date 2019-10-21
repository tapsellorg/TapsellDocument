---
layout: classic-docs
title: بنر استاندارد در React Native
lang: fa
permalink: /tapsell_sdk/react/standard.html
toc: true # table of contents
---

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.


## درخواست تبلیغ
ابتدا ماژول تپسل و کامپوننت BannerAd را به کد خود اضافه کنید:


```javascript
import Tapsell, { BannerAd } from 'react-native-tapsell'
```

جهت نمایش بنر استاندارد، باید محلی برای نمایش آن در صفحه در نظر بگیرید. بنر استاندارد، دارای سایزهای استانداردی است که در SDK تپسل مشخص شده‌اند. جهت نمایش بنر، از `component` زیر استفاده کنید:

```xml
<BannerAd
  zoneId={STANDARD_BANNER_ZONE_ID}
  bannerType={Tapsell.BANNER_300x250}
  />
```

مقدار `zoneId` کلیدی ست که بعد از ساخت اپلیکیشن در پنل و ثبت یک `zone` از نوع بنری استاندارد دریافت میکنید. با تغییر فیلد `zoneId` تبلیغ بارگزاری می‌شود.

ورودی `BannerType` اندازه‌های مختلف را بیان میکند و شامل مقادیر زیر می‌باشد:

| `BannerType.BANNER_320x50` | `320x50` |
| `BannerType.BANNER_320x100` | `320x100` |
| `BannerType.BANNER_250x250` | `250x250` |
| `BannerType.BANNER_300x250` | `300x250` |  

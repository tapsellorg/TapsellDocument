---
layout: classic-docs
title: بنر استاندارد در یونیتی
lang: fa
permalink: /plus-sdk/reactnative/standard/index.html
toc: true # table of contents
---

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.

## درخواست تبلیغ
جهت نمایش بنر استاندارد، باید محلی برای نمایش آن در صفحه در نظر بگیرید. بنر استاندارد، دارای سایزهای استانداردی است که در SDK تپسل مشخص شده‌اند. جهت نمایش بنر، از تابع زیر استفاده کنید:


ابتدا کلاس‌های مورد نیاز را ایمپورت کنید:

```js
import { 
  TapsellPlus, TapsellPlusBannerType,
  TapsellPlusHorizontalGravity, TapsellPlusVerticalGravity
  } from 'react-native-tapsell-plus';
```

```js
TapsellPlus.requestStandardBannerAd(ZONE_ID, TapsellPlusBannerType.BANNER_320x50)
.then((responseId) => {
  // save the responseId
})
.catch(error => {
  // Error occurred
});
```

BANNER_TYPE سایز نمایش بنر هست و میتواند مقادیر زیر باشد:

| `BANNER_320x50` | `320x50` |  
| `BANNER_320x100` | `320x100` |   
| `BANNER_250x250` | `250x250` |  
| `BANNER_300x250` | `300x250` |  
| `BANNER_468x60` | `468x60` |  
| `BANNER_728x90` | `728x90` |  

## مخفی کردن و نمایش بنر
برای نمایش بنر با داشتن **responseId** که از درخواست برمیگردد کد زیر را استفاده کنید:

```js
TapsellPlus.showStandardBannerAd(responseId,
    TapsellPlusHorizontalGravity.BOTTOM,
    TapsellPlusVerticalGravity.CENTER,
    onOpened, onError);
```

| `onOpened(data: object)` | در صورت بازشدن تبلیغ این تابع فراخوانی خواهد شد |  
| `onError(errorData: object)` | در صورت رخداد هر خطایی این تابع فراخوانی خواهد شد |  

برای از بین بردن این بنر با استفاده از **responseId** استفاده شده برای نمایش تبلیغ اقدام به حذف آن نمایید

```js
TapsellPlus.destroyStandardBannerAd(responseId);
```

### نمایش و عدم نمایش بنر (hide/show)

در صورتی که نیاز باشد که تبلیغ **مخفی** شود از توابع زیر برای کنترل این رفتار استفاده کنید

```js
// To hide
TapsellPlus.hideStandardBanner();

// To show
TapsellPlus.displayStandardBanner();
```

**نکته**: این نوع مخفی‌کردن تاثیری در درخواست تبلیغ ندارد و صرفا visibility تبلیغ عوض می‌شود.
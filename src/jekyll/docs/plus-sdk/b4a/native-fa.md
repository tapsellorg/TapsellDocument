---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در React Native
lang: fa
permalink: /plus-sdk/b4a/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
با روش زیر درخواست تبلیغ بدهید.

```javascript
let zoneId = "theZoneIdYouHave";
TapsellPlus.requestNativeAd(zoneId).then(responseId => {
  // Save the responseId -- You need it to show the ad
})
.catch(error => {
  // Do on Error
});
```
خروجی تابع یک
Promise
است که در صورت
resolve
شدن یک
**responseId**
برمیگرداند.

این شناسه برای نمایش تبلیغ مورد نیاز است.


### نمایش تبلیغ

```js
TapsellPlus.showNativeAd(responseId, onOpened, onError);
```

| پارامتر | توضیحات |
| - | - |
| `responseId` | شناسه‌ی دریافتی از تابع درخواست |
| `onOpened(data: object)` | در صورت موفقیت آمیز بودن، دیتای لازم با فرمت جدول بعدی در ورودی این کالبک خواهد بود |
| `onError(errorMessage: object)` | در صورت رخداد هر گونه خطا |

برای نمایش تبلیغ، می‌بایست از فیلدهای موجود در آبجکت `adData` و استفاده کنید.   


| توضیحات | تابع |
| - | - |
| شناسه تبلیغ | `ad_id : string` |
| عنوان تبلیغ | `title : string` |
| توضیحات تبلیغ | `description : string` |
| متن دعوت کننده از کاربر به کلیک/نصب  | `call_to_action_text : string` |
| آدرس آیکون تبلیغ | `icon_url` |
| تصویر افقی تبلیغ | `portrait_static_image_url` |
| تصویر عمودی تبلیغ | `landscape_static_image_url` |
  

### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```javascript
TapsellPlus.nativeAdClicked(responseId);
```
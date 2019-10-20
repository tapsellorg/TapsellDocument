---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در React Native
lang: fa
permalink: /tapsell_sdk/react/native.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
ابتدا ماژول تپسل و کامپوننت AdVideo را به کد خود اضافه کنید :

```javascript
import Tapsell, { AdVideo } from 'react-native-tapsell'
```

جهت ارسال درخواست تبلیغ همسان، از تابع زیر استفاده کنید.

```javascript
Tapsell.requestNativeٰVideoAd(zoneId, onAdAvailable, onNoAdAvailable, OnNoNetwork, onError);
```

ورودی `zoneId`، شناسه تبلیغ‌گاه است که باید آن را از داشبورد تپسل دریافت کنید.

اکشن های مختلف و شرایط اجرا شدن آن ها در جدول زیر آمده است :

| توضیحات | تابع |
| - | - |
| هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید | `onError(zoneId : string, error : string)` |
| زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد. | `onAdAvailable(zoneId : string, adId : string)` |
| در صورتی که تبلیغی برای نمایش وجود نداشته باشد. | `onNoAdAvailable(zoneId : string)	` |
| زمانی که دسترسی به شبکه موجود نباشد. | `onNoNetwork(zoneId : string)` |


### نمایش تبلیغ
برای نمایش تبلیغ، می‌بایست از فیلدهای موجود در آبجکت `adData` و همچنین از کامپوننت `AdVideo` استفاده کنید. نمونه استفاده از کامپوننت `AdVideo` در کد زیر آمده است.

```javascript
...
<AdVideo adId={<Your Ad Id>}/>
...
```

| تابع | توضیحات |
| - | - |
| ad_id : string | شناسه تبلیغ |
| title : string | عنوان تبلیغ |
| description : string | توضیحات تبلیغ |
| call_to_action_text : string	 | متن دعوت کننده از کاربر به کلیک/نصب |
| icon_url | آدرس آیکون تبلیغ |
  

### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```c#
native.Clicked ();
```
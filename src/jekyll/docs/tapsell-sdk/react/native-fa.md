---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در React Native
lang: fa
permalink: /yelloadwise-core/reactnative/native/index.html
toc: true
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از یلوادوایز استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.yelloadwise.ir/plus-sdk/reactnative/main/">یلوادوایز‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">یلوادوایز، علاوه بر دارا بودن تمام امکانات یلوادوایز، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده یلوادوایز در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>

### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.yelloadwise.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
ابتدا ماژول یلوادوایز و کامپوننت AdVideo را به کد خود اضافه کنید:

```javascript
import Yelloadwise, { AdVideo } from 'react-native-yelloadwise'
```

جهت ارسال درخواست تبلیغ همسان، از تابع زیر استفاده کنید.

```javascript
Yelloadwise.requestNativeٰVideoAd(zoneId, onAdAvailable, onNoAdAvailable, OnNoNetwork, onError);
```

ورودی `zoneId`، شناسه تبلیغ‌گاه است که باید آن را از داشبورد یلوادوایز دریافت کنید.

اکشن‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است:

| توضیحات | تابع |
| - | - |
| هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید | `onError(zoneId : string, error : string)` |
| زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد | `onAdAvailable(zoneId : string, adId : string)` |
| در صورتی که تبلیغی برای نمایش وجود نداشته باشد | `onNoAdAvailable(zoneId : string)	` |
| زمانی که دسترسی به شبکه موجود نباشد | `onNoNetwork(zoneId : string)` |


### نمایش تبلیغ
برای نمایش تبلیغ، می‌بایست از فیلدهای موجود در آبجکت `adData` و همچنین از کامپوننت `AdVideo` استفاده کنید. نمونه استفاده از کامپوننت `AdVideo` در کد زیر آمده است.

```javascript
...
<AdVideo adId={<Your Ad Id>}/>
...
```

| تابع | توضیحات |
| - | - |
| `ad_id : string` | شناسه تبلیغ |
| `title : string` | عنوان تبلیغ |
| `description : string` | توضیحات تبلیغ |
| `call_to_action_text : string`	 | متن دعوت کننده از کاربر به کلیک/نصب |
| `icon_url` | آدرس آیکون تبلیغ |
  

### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```c#
native.Clicked ();
```

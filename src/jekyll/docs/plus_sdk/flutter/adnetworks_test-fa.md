---
layout: classic-docs
title: تست شبکه‌های تبلیغاتی
lang: fa
permalink: /plus_sdk/flutter/adnetworks_test.html
toc: true
---
* برای اطمینان از صحت عملکرد adNetwrok هایی که اضافه کردید از `zoneId` مربوط به هرکدام استفاده کنید. هر `zoneId` مربوط به یک adNetwork و یک نوع تبلیغ هست و تبلیغ حالت تست نمایش داده میشود.

* توجه داشته باشید در حالت تست باید از `appId` تست استفاده کنید.

* هنگام تست باید از ip خارج ایران (فیلتر شکن) استفاده کنید.

* برای عملکرد صحیح حالت تست باید یکبار برنامه باز و بسته شود. همچنین در دومین درخواست، تبلیغ  adNetwork مورد نظر نمایش داده میشود.

* برای تست facebook باید hash دستگاهی که بر روی آن تست انجام میشود طبق روش گفته شده به sdk داده شود.

* تست را در حالت build release هم انجام دهید.

برای تست از این `appId` استفاده کنید.

### شناسه تپسل

```java
TapsellPlus.initialize("alsoatsrtrotpqacegkehkaiieckldhrgsbspqtgqnbrrfccrtbdomgjtahflchkqtqosa");
```

### تبلیغ‌گاه‌ها

برای هر ادنتورک و هر تبلیغ از `zoneId` های زیر برای درخواست و نمایش تبلیغ استفاده کنید. در حال حاضر فقط adType/adNetwork های زیر قابل استفاده هستند.

|        Ad Network      |              Ad Type              |ZoneId
|:------------:|:----------------------------:|:----------------------------:|
|     Tapsell     |     Rewarded Video    | `5cfaa802e8d17f0001ffb28e`|
|     Tapsell    |    Interstitial    |`5cfaa942e8d17f0001ffb292`|
| Tapsell |  Native  |`5cfaa9deaede570001d5553a`|
|  Tapsell | Standard |`5cfaaa30e8d17f0001ffb294`|
|    Admob    |    Rewarded Video   |`5cfaa8aee8d17f0001ffb28f`|
|    Admob    |     Interstitial     |`5cfaa9b0e8d17f0001ffb293`|
|    Admob    |     Standard     |`5cfaaa4ae8d17f0001ffb295`|
|    Admob    |     Native     |`5d123c9968287d00019e1a94`|
|    Admob    |     Native Video     |`5d123d6f68287d00019e1a95`|
|    Unity Ads    |     Rewarded Video     |`5cfaa8eae8d17f0001ffb291`|
|    Chartboost    |     Rewarded Video     |`5cfaa8cee8d17f0001ffb290`|
|    Facebook    |     Rewarded Video     |`5cfaa838aede570001d55538`|
|    Facebook    |     Interstitial     |`5cfaa975aede570001d55539`|
|    AdColony    |     Rewarded Video     |`5d3362766de9f600013662d5`|
|    AdColony    |     Interstitial     |`5d336289e985d50001427acf`|
|    AppLovin    |     Rewarded Video     |`5d3eb48c3aef7a0001406f84`|
|    AppLovin    |     Interstitial     |`5d3eb4fa3aef7a0001406f85`|
|    AppLovin    |     Standard     |`5d3eb5337a9b060001892441`|
|    Vungle    |     Rewarded Video     |`5d3eb55a7a9b060001892442`|
|    Vungle    |     Interstitial     |`5d3eb56d3aef7a0001406f86`|

### تست facebook
زمانی که از facebook استفاده میکنید متنی مشابه زیر در `logcat` پرینت میشود.

```
When testing your app with Facebook's ad units you must specify the device hashed ID to ensure the delivery of test ads, add the following code before loading an ad: AdSettings.addTestDevice("YOUR_DEVICE_HASH");
```

برای دیدن تبلیغات تستی فیسبوک مقدار `hash` دستگاه خود را از طریق متد زیر به کتابخانه تپسل بدهید.

```java
TapsellPlus.addFacebookTestDevice("YOUR_DEVICE_HASH");
```
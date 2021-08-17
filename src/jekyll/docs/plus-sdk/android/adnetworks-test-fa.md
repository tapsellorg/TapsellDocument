---
layout: classic-docs
title: تست شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/android/adnetworks-test/index.html
toc: true
---
* برای اطمینان از صحت عملکرد adNetwrokهایی که اضافه کردید از `zoneId` مربوط به هرکدام استفاده کنید. هر `zoneId` مربوط به یک adNetwork و یک نوع تبلیغ هست و تبلیغ حالت تست نمایش داده میشود.

* توجه داشته باشید در حالت تست باید از `appId` تست استفاده کنید.

* هنگام تست باید از ip خارج ایران (فیلتر شکن) استفاده کنید.

* تست را در حالت build release هم انجام دهید.

برای تست از این `appId` استفاده کنید.

### شناسه تپسل

```java
TapsellPlus.initialize(
    CONTEXT,
    "alsoatsrtrotpqacegkehkaiieckldhrgsbspqtgqnbrrfccrtbdomgjtahflchkqtqosa");
```

> **استفاده از AdMob SDK**  
> 
> برای استفاده ادموب بایستی تگ مورد نیاز آنرا در مانیفست قرار دهید. برای اطلاعات بیشتر از نحوه‌ی اجرای این کار به 
> [مستندات شبکه‌های تبلیغاتی](/plus-sdk/android/add-adnetworks/index.html)
> مراجعه کنید
> 
> برای تست ادموب نیازی به App ID اصلی ندارید و می‌توانید از test app id استفاده کنید:
> 
> ```
> ca-app-pub-3940256099942544~3347511713
> ```




### تبلیغ‌گاه‌ها

برای هر ادنتورک و هر تبلیغ از `zoneId` های زیر برای درخواست و نمایش تبلیغ استفاده کنید. در حال حاضر فقط adType/adNetworkهای زیر قابل استفاده هستند.

|        Ad Network      |              Ad Type              |ZoneId
|:------------:|:----------------------------:|:----------------------------:|
|     Tapsell     |     Rewarded Video    | `5cfaa802e8d17f0001ffb28e`|
|     Tapsell    |    Interstitial    |`5cfaa942e8d17f0001ffb292`|
| Tapsell |  Native  |`5cfaa9deaede570001d5553a`|
| Tapsell |  Native Video  |`60edcf8ad3459c17f019d36b`|
|  Tapsell | Standard |`5cfaaa30e8d17f0001ffb294`|
|  Tapsell | Vast (PreRoll) |`60e441ff537bfb4073746249`| 
|    Admob    |    Rewarded Video   |`5cfaa8aee8d17f0001ffb28f`|
|    Admob    |     Interstitial     |`5cfaa9b0e8d17f0001ffb293`|
|    Admob    |     Standard     |`5cfaaa4ae8d17f0001ffb295`|
|    Admob    |     Native     |`5d123c9968287d00019e1a94`|
|    Unity Ads    |     Rewarded Video     |`5cfaa8eae8d17f0001ffb291`|
|    Unity Ads    |     Interstitial     |`608d1c1c2d8e7e0001348111`|
|    Unity Ads    |     Standard     |`608d20a7fb661b000190bfe4`|
|    Chartboost    |     Rewarded Video     |`5cfaa8cee8d17f0001ffb290`|
|    Chartboost    |     Interstitial    |`60c5b303d756bf0001891f1c`|
|    AdColony    |     Rewarded Video     |`5d3362766de9f600013662d5`|
|    AdColony    |     Interstitial     |`5d336289e985d50001427acf`|
|    AdColony    |     Standard     |`60bf4ef0d40d970001693745`|
|    AppLovin    |     Rewarded Video     |`5d3eb48c3aef7a0001406f84`|
|    AppLovin    |     Interstitial     |`5d3eb4fa3aef7a0001406f85`|
|    AppLovin    |     Standard     |`5d3eb5337a9b060001892441`|

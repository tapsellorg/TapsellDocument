---
layout: classic-docs
title: تست شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/reactnative/adnetworks-test/index.html
toc: true
---

* برای اطمینان از صحت عملکرد adNetwrokهایی که اضافه کردید از `zoneId` مربوط به هرکدام استفاده کنید. هر `zoneId` مربوط به یک adNetwork و یک نوع تبلیغ هست و تبلیغ حالت تست نمایش داده میشود.

* توجه داشته باشید در حالت تست باید از `appId` تست استفاده کنید.

* هنگام تست باید از ip خارج ایران (فیلتر شکن) استفاده کنید.

* تست را در حالت build release هم انجام دهید.

برای تست از این `appId` استفاده کنید.

### شناسه تپسل

```java
TapsellPlus.initialize("alsoatsrtrotpqacegkehkaiieckldhrgsbspqtgqnbrrfccrtbdomgjtahflchkqtqosa");
```

### تبلیغ‌گاه‌ها

برای هر ادنتورک و هر تبلیغ از `zoneId` های زیر برای درخواست و نمایش تبلیغ استفاده کنید. در حال حاضر فقط adType/adNetworkهای زیر قابل استفاده هستند.

|        Ad Network      |              Ad Type              |ZoneId
|:------------:|:----------------------------:|:----------------------------:|
|     Tapsell     |     Rewarded Video    | `5cfaa802e8d17f0001ffb28e`|
|     Tapsell    |    Interstitial    |`5cfaa942e8d17f0001ffb292`|
| Tapsell |  Native  |`5cfaa9deaede570001d5553a`|
|  Tapsell | Standard |`5cfaaa30e8d17f0001ffb294`|
|    Admob    |    Rewarded Video   |`5cfaa8aee8d17f0001ffb28f`|
|    Admob    |     Interstitial     |`5cfaa9b0e8d17f0001ffb293`|
|    Admob    |     Standard     |`5cfaaa4ae8d17f0001ffb295`|
|    Unity Ads    |     Rewarded Video     |`5cfaa8eae8d17f0001ffb291`|
|    Chartboost    |     Rewarded Video     |`5cfaa8cee8d17f0001ffb290`|
|    AdColony    |     Rewarded Video     |`5d3362766de9f600013662d5`|
|    AdColony    |     Interstitial     |`5d336289e985d50001427acf`|
|    AppLovin    |     Rewarded Video     |`5d3eb48c3aef7a0001406f84`|
|    AppLovin    |     Interstitial     |`5d3eb4fa3aef7a0001406f85`|
|    AppLovin    |     Standard     |`5d3eb5337a9b060001892441`|

---
layout: classic-docs
title: تست شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/b4a/adnetworks-test/index.html
toc: true
---



* برای اطمینان از صحت عملکرد adNetwrokهایی که اضافه کردید از `zoneId` مربوط به هرکدام استفاده کنید. هر `zoneId` مربوط به یک adNetwork و یک نوع تبلیغ هست و تبلیغ حالت تست نمایش داده میشود.

* توجه داشته باشید در حالت تست باید از `appId` تست استفاده کنید.

* هنگام تست باید از ip خارج ایران (فیلتر شکن) استفاده کنید.

* تست را در حالت build release هم انجام دهید.

برای تست از این `appId` استفاده کنید.

### شناسه یلوادوایز

```java
yelloadwise.initialize("alsoatsrtrotpqacegkehkaiieckldhrgsbspqtgqnbrrfccrtbdomgjtahflchkqtqosa");
```


> **استفاده از AdMob SDK**  
> 
> برای استفاده ادموب بایستی تگ مورد نیاز آنرا در مانیفست قرار دهید. برای اطلاعات بیشتر از نحوه‌ی اجرای این کار به 
> [مستندات شبکه‌های تبلیغاتی](/plus-sdk/b4a/add-adnetworks/index.html)
> مراجعه کنید
> 
> برای تست ادموب نیازی به App ID اصلی ندارید و می‌توانید از test app id استفاده کنید:
> 
> در مانیفست خود این خط را برای اضافه‌کردن اپ‌آی‌دی تست اضافه کنید:
> 
> ```vb
>CreateResourceFromFile(Macro, YelloadwiseB4A.AdMobTestAppId)
> ```
> این مانیفست در فایل‌های یلوادوایز برای تست کردن ادموب اضافه شده است.  
> حتما به ادامه‌ی مستندات بپردازید تا پیاده‌سازی ادنتورک ادموب را نیز انجام دهید
{:data-title="استفاده از AdMob" data-color="red"}



### تبلیغ‌گاه‌ها

برای هر ادنتورک و هر تبلیغ از `zoneId` های زیر برای درخواست و نمایش تبلیغ استفاده کنید. در حال حاضر فقط adType/adNetworkهای زیر قابل استفاده هستند.

|        Ad Network      |              Ad Type              |ZoneId
|:------------:|:----------------------------:|:----------------------------:|
|     irancell.ir     |     Rewarded Video    | `5cfaa802e8d17f0001ffb28e`|
|     irancell.ir    |    Interstitial    |`5cfaa942e8d17f0001ffb292`|
| irancell.ir |  Native  |`5cfaa9deaede570001d5553a`|
|  irancell.ir | Standard |`5cfaaa30e8d17f0001ffb294`|
|    Admob    |    Rewarded Video   |`5cfaa8aee8d17f0001ffb28f`|
|    Admob    |     Interstitial     |`5cfaa9b0e8d17f0001ffb293`|
|    Admob    |     Standard     |`5cfaaa4ae8d17f0001ffb295`|
|    Unity Ads    |     Rewarded Video     |`5cfaa8eae8d17f0001ffb291`|
|    Unity Ads    |     Interstitial     |`608d1c1c2d8e7e0001348111`|
|    Unity Ads    |     Standard     |`608d20a7fb661b000190bfe4`|
|    Chartboost (❌)    |     Rewarded Video     |`5cfaa8cee8d17f0001ffb290`|
|    Chartboost (❌)  |     Interstitial     |`60c5b303d756bf0001891f1c`|
|    AdColony    |     Rewarded Video     |`5d3362766de9f600013662d5`|
|    AdColony    |     Interstitial     |`5d336289e985d50001427acf`|
|    AdColony    |     Standard     |`60bf4ef0d40d970001693745`|
|    AppLovin    |     Rewarded Video     |`5d3eb48c3aef7a0001406f84`|
|    AppLovin    |     Interstitial     |`5d3eb4fa3aef7a0001406f85`|
|    AppLovin    |     Standard     |`5d3eb5337a9b060001892441`|
|    Mintegral    |     Rewarded Video     |`612232e33cf0307ab73e9a3f`|
|    Mintegral    |     Interstitial     |`612b6f24e2645f79d3f3549e`|
|    Mintegral    |     Standard     |`615800246cd7ee3cd28f15d6`|

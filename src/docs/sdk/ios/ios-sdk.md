---
layout: classic-docs
title: SDK iOS
lang: fa
permalink: /sdk/ios/index.html
toc: true # table of contents
---

## تنظيمات اوليه در پروژه

در [اینجا](https://github.com/metrixorg/MetrixSDK-iOSSample) پروژه نمونه وجود دارد می‌توانید نحوه استفاده از متریکس را در این پروژه ببینید.

### پياده‌سازي

مراحل استفاده از SDK متريکس داخل پروژه iOS شما به شکل زير است.

### افزودن SDK به پروژه


اگر از CocoaPods استفاده می‌کنید، می‌توانید خط زیر را به Podfile خود اضافه کنید:

```ruby
pod 'MetrixSdk', '1.0.1'
```

---

همچنین شما مي‌توانيد SDK متريکس را به عنوان يک framework به پروژه خود اضافه کنيد.

از [اینجا](https://github.com/metrixorg/MetrixSDK-iOS) دانلود نماید.

`MetrixSdk.framework.zip`
از iOS 8 اپل فريم‌ورکهاي پويا (dynamic frameworks يا embedded frameworks) را معرفي کرده است. اگر برنامه‌ شما iOSهاي با نسخه 8 يا بالاتر را هدف‌گذاري کرده است، مي‌توانيد از فريم‌ورک پوياي متريکس استفاده کنيد.

### افزودن فريم‌ورک هاي iOS

- پروژه خود را در قسمت Project Navigator انتخاب کنيد.
- در قسمت سمت چپ target مورد نظر را انتخاب کنيد.
- در تب Build Phases گروه Link Binary with Libraries را باز کنيد.
- در پايين اين بخش دکمه + رو انتخاب کنيد.
- فرم‌ورک‌هاي AdSupport.framework و iAd.framework و CoreTelephony.framework را انتخاب کنيد.
- وضعيت فريم‌ورکها را به Optional تغيير دهيد.

### يکپارچه سازي SDK در برنامه خود

بايد از عبارت زير براي import استفاده کنيد.

```objc
#import <MetrixSdk/Metrix.h>
```

### راه اندازي اوليه

در Project Navigatorُ فايل منبع application delegate خود را انتخاب کنيد. عبارت import مناسب را در بالاي فايل وارد کنيد و سپس متد زير را در متدهاي didFinishLaunching يا didFinishLaunchingWithOptions فراخواني کنيد.

```objc
#import "Metrix.h"
// or #import <Metrix/Metrix.h>
// or #import <MetrixSdk/Metrix.h>

// ...

NSString *yourAppId = @"{YourAppId}";
NSString *environment = MXEnvironmentSandbox;
MXConfig *metrixConfig = [MXConfig configWithAppId:yourAppId
                                            environment:environment];

[Metrix appDidLaunch:metrixConfig];
```

**نکته**: راه‌ اندازي SDK به اين شکل بسيار مهم است. در غير اين صورت ممکن است باعث مشکلات مختلف شود.

مقدار {YourAppId} را با مقدار Metrix App Id خود جايگزين کنيد.

بسته به اين که برنامه خود را براي تست يا محصول نهايي خروجي ميگيريد، بايد مقدار environment را يکي از موارد زير قرار دهيد:

```objc
NSString *environment = MXEnvironmentSandbox;
NSString *environment = MXEnvironmentProduction;
```

## ويژگي هاي اضافه

بعد از پياده‌سازي SDK مي‌توانيد از ويژگي‌هاي زير استفاده کنيد.

## رويداد سفارشي

با استفاده از اين تابع مي‌توانيد يک رويداد سفارشي بسازيد. براي اين کار شما در ابتدا بايد در داشبورد متريکس از قسمت مديريت رخدادها، رخداد موردنظر خود را ثبت کنيد و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنيد.
ابتدا بايد يک رويداد سفارشي بسازيد

```objc
MXCustomEvent *event = [MXCustomEvent newEvent:@"mySlug" attributes:myAttributes metrics:myMetrics];
[Metrix trackCustomEvent:event];
```

براي يک رويداد سفارشي ميتوانيد به تعداد دلخواه attribute و metric خاص سناريو خود بسازيد، به عنوان مثال فرض کنيد در يک برنامه خريد آنلاين مي‌خواهيد يک رويداد سفارشي بسازيد:

```objc
NSMutableDictionary *myAttribures = [[NSMutableDictionary alloc] init];
    myAttributes[@"first_name"] = @"Ali";
    myAttributes[@"last_name"] = @"Bagheri";
    myAttributes[@"manufacturer"] = @"Nike";
    myAttributes[@"product_name"] = @"shirt";
    myAttributes[@"type"] = @"sport";
    myAttributes[@"size"] = @"large";
NSMutableDictionary *myMetrics = [[NSMutableDictionary alloc] init];
    myAttributes[@"price"] = @(100000);
    myAttributes[@"purchase_time"] = current_time;
```

## ردگيري جريان صفحات

شما ميتوانيد جريان حرکت کاربران خود در صفحات برنامه خود را با متريکس ردگيري کنيد. براي اين کار بايد به هنگام ورود به هر صفحه (در viewWillAppear يا viewDidApear) متد زير را فراخواني کنيد:

```objc
[Metrix trackScreen:@"HomePage"];
```

## شناسه‌هاي دستگاه

SDK متريکس امکان دسترسي به برخي شناسه‌هاي دستگاه را فراهم مي‌کند.

### شناسه تبليغاتي

برخي سرويسها (مثل Google Analytics) شناسه يکتايي براي هر دستگاه فراهم ميکنند تا از گزارش چندباره اطلاعات اجتناب کنند.

براي به دست آوردن اين شناسه کافي است متد زير را فراخواني کنيد:

```objc
NSString *idfa = [Metrix idfa];
```

### شناسه متريکس

براي هر دستگاهي که برنامه شما را نصب ميکند، سرور متريکس يک شناسه يکتا (mxid) توليد ميکند.

بنابراين پيش از راه اندازي اوليه و ثبت برنامه شما در سرورهاي متريکس دسترسي به اين شناسه ممکن نيست.

براي به دست آوردن اين شناسه ميتوانيد به شکل زير عمل کنيد:

```objc
NSString *mxid = [Metrix mxid];
```

## ردگيرهاي پيش‌نصب

با استفاده از اين تابع مي‌توانيد با استفاده از يک `trackerToken` که از پنل آن را دريافت مي‌کنيد، براي همه‌ي رويدادها يک `tracker` پيش‌فرض را قرار دهيد.

براي اين کار app delegate برنامه خود را باز کرده و trackerToken را براي MXConfig خود قرار دهيد:

```objc
MXConfig *metrixConfig = [MXConfig configWithAppId:yourAppId environment:environment];
[metrixConfig setTrackerToken:@"{TrackerToken}"];
[Metrix appDidLaunch:metrixConfig];
```

بعد از اجراي برنامه بايد لاگي به اين شکل در XCode ببينيد:

```objc
Tracker token: 'abc123'
```

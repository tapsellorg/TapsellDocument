---
layout: classic-docs
title: راه اندازی تپسل پلاس در یونیتی (iOS)
lang: fa
permalink: /plus_sdk/unity/initialize-ios/index.html
toc: true # table of contents
---

## نصب Cocoapods
تپسل پلاس برای استفاده هرچه ساده تر بروی `Cocoapods` متشر شده است. در صورتی که تا به حال Cocoapods را روی سیستم تان نصب نکرده اید، می­توانید با دستور زیر این کار را انجام دهید:

```console
$ sudo gem install cocoapods
```

برای کسب اطلاعات بیشتر می­توانید به وبسایت [Cocoapods](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample/releases/download/v2.1/TapsellPlusUnity-v2.1.unitypackage) مراجعه کنید


## اضافه کردن تپسل پلاس به Podfile
خطوط زیر را به Podfile خود اضافه کنید:

```pod
pod ‘TapsellPlusSDK’, ‘1.0.0’
pod ‘TapsellPlusSDK/UnityPlugin’, ‘1.0.0’
```

با این خط، تپسل پلاس و تمامی کتابخانه های مورد نیاز آن دانلود شده، تنظیمات لازم برای هر کدام اعمال شده و به پروژه شما اضافه می­گردند.


## آپدیت فایل .plist پروژه
با انتشار iOS 9 , اپل سیستم ATS را معرفی نمود که طبق آن لازم است اپلیکیشن‌ها از SSL با مشخصات خاصی برای ارتباطات شبکه استفاده کنند. در حال حاضر، لازم است که برای استفاده از تبلیغات تپسل ATS در اپلیکیشن غیرفعال شود. جهت جلوگیری از مداخله ATS در پخش تبلیغات، قسمت زیر را به plist پروژه خود اضافه کنید.

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

## اضافه کردن URL Schemes
با انتشار نسخه iOS 9، شرکت اپل ارتباطات بین اپلیکیشن‌ها  (canOpenUrl) را محدود کرده است و هر اپلیکیشن باید مشخص کند چه اپلیکیشن‌های دیگری را باز خواهد نمود. تپسل از تابع canOpenUrl برای تصمیم‌گیری در مورد انجام عمل نهایی در بنرهای تبلیغات استفاده می‌کند. برای فعالسازی deep-linking بین SDK تپسل و سرویس‌های مختلف، بخش زیر را به `plist` پروژه خود اضافه کنید.

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>mailto</string>
    <string>itms-apps</string>
    <string>sms</string>
    <string>tel</string>
</array>
```

## آپدیت تنظیمات Build
فلگ –ObjC را به Other Linker Flags در Build Setting اضافه کنید.
سپس فلگ Always Embed Swift Standard Libraries را در پروژه خود فعال کنید.

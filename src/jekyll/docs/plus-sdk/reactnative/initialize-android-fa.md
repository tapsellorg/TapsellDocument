---
layout: classic-docs
title: راه اندازی تپسل پلاس در ReactNative (Android)
lang: fa
permalink: /plus-sdk/reactnative/initialize-android/index.html
toc: true # table of contents
---

> در صورت وجود مشکل یا ابهام به [لیست خطاهای فنی رایج]({{ site.baseurl }}/faq/plus-sdk/reactnative/) مراجعه کنید.
{:data-title="نکته Build پروژه" data-color="red"}

> خطاهای رایج و احتمالی کاربران را می‌توانید در [**GitHub issues**](https://github.com/tapsellorg/TapsellPlusSDK-ReactNativePlugin/issues?q=is%3Aissue) ریپازیتوری پلاگین مشاهده کنید.
{:data-title="خطاها و مشکلات" data-color="orange"}

## دریافت SDK تپسل پلاس
برای افزودن پلاگین تپسل‌پلاس به پروژه از کامند زیر استفاده کنید:

```console
npm install react-native-tapsell-plus --save
```

> برای استفاده از تپسل پلاس بایستی ورژن Android gradle plugin حداقل ۳.۶.۰ باشد  
> برای مشاهده‌ی نمونه‌ی پیاده‌سازی می‌توانید کد نظیر در سمپل تپسل را از [این لینک](https://github.com/tapsellorg/TapsellPlusSDK-ReactNativeSample/blob/864fa2bf05f9b6801940d570ef9388602edef1b1/android/build.gradle#L15) مشاهده کنید
> 
> ```java
> // <prj_root>/android/build.gradle
> 
> dependencies { 
>   classpath("com.android.tools.build:gradle:4.1.3") // Use a version higher than 3.5.x
> }
> ```
> در صورت پایین بودن ورژن با خطاهای کامپایل همانند `Manifest merger failed with multiple errors, see logs` روبرو خواهید شد.
{:data-title="Gradle plugin" data-color="orange"}

[![npm version](https://img.shields.io/npm/v/react-native-tapsell-plus?color=green&label=react-native-tapsell-plus&logo=react)](https://www.npmjs.com/package/react-native-tapsell-plus)


## شروع کار با پلاگین
ابتدا ماژول تپسل پلاس را به کد خود اضافه کنید:

```javascript
import { TapsellPlus } from 'react-native-tapsell-plus';
```

سپس تابع زیر را در یکی از اسکریپت‌های برنامه‌ی خود که در ابتدای برنامه اجرا می‌شود فراخوانی کنید.

```javascript
TapsellPlus.initialize(APP_KEY);
```

`APP_KEY` کلید تپسل هست و برای هر اپلیکیشن که می‌سازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود، میتوانید از پنل کپی کنید.

اکنون می‌توانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.

> در صورتی که `targetSdkVersion` برابر ۲۸ یا بالاتر باشد هنگام اجرای برنامه در حالت دیباگ (با استفاده از Metro sever) بایستی network-security را در برنامه لحاظ کنید.  
> برای اطلاعات بیشتر [این بخش](https://reactnative.dev/docs/network#using-fetch) از مستندات ری‌اکت نیتیو را مطالعه کنید.  
> 
> راه حل سریع:  
> عبارت `android:usesCleartextTraffic="true"` را به اتریبیوتهای تگ application در مانیفست اضافه کنید:
> 
> ```xml
> <!-- android/app/src/main/AndroidManifest.xml -->
> <application
>   ...
>   android:usesCleartextTraffic="true">
>  <!-- ... -->
> </application>
> ```
> [نمونه در سمپل گیتهاب](https://github.com/tapsellorg/TapsellPlusSDK-ReactNativeSample/blob/864fa2bf05f9b6801940d570ef9388602edef1b1/android/app/src/main/AndroidManifest.xml#L12)
{:data-title="نکته در مورد Metro server" data-color="green"}

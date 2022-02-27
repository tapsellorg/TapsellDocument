---
layout: classic-docs
title: راه اندازی تپسل پلاس در فلاتر (اندروید)
lang: fa
permalink: /plus-sdk/flutter/initialize/index.html
toc: true
---


> در صورت وجود مشکل یا ابهام به [لیست خطاهای فنی رایج]({{ site.baseurl }}/faq/plus-sdk/flutter/) مراجعه کنید یا صفحه‌ی [Github Issues](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues?q=is%3Aissue) را بررسی نمایید.
{:data-title="نکته Build پروژه" data-color="red"}

## اضافه کردن کتابخانه به پروژه
در بخش dependencies فایل pubspec.yaml پروژه خط زیر را اضافه کنید تا پکیج تپسل اضافه شود:

```yaml
dependencies:
  tapsell_plus: ^2.1.4
```


برای نصب بسته ها از خط فرمان، دستور زیر را اجرا کنید:

```bash
flutter pub get
```

اکنون کتابخانه TapsellPlus در کد dart قابل دسترس است.


> تمام کد‌های لازم با استفاده از کد `TapsellPlus.instance.*` قابل دسترسی‌ست.

## مقداردهی اولیه

در صفحه اولیه برنامه باید کتابخانه تپسل پلاس را مقداردهی کنید.

> اضافه‌کردن `initialize` در هر جایی ممکن است، اما بهتر است در شروع برنامه این کد فراخوانی شود.

```dart
import 'package:tapsell_plus/tapsell_plus.dart';

void main() {
  runApp(yourApp());

  final appId = "TAPSELL_KEY";
  TapsellPlus.instance.initialize(appId);
}
```

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که میسازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود، میتوانید از پنل کپی کنید.

## تنظیمات مربوط به GDPR
از آن‌جا که کتابخانه‌ی تپسل پلاس قوانین GDPR را در خصوص نمایش تبلیغات شخصی‌سازی شده رعایت می‌کند، به طور پیش فرض اگر کاربر با IP یکی از کشورهای مشمول این قانون از اپلیکیشن شما استفاده کند، دیالوگی در این خصوص به کاربر نمایش می‌دهد. اگر تمایل دارید تا به جای تصمیم کاربر، خودتان دسترسی لازم را تعیین کنید می‌توانید از تکه کد زیر استفاده نمایید. توجه داشته باشید که این تکه کد می‌بایستی پس از Initialize شدن تپسل پلاس و پیش از درخواست تبلیغ صدا زده شود تا نتیجه‌ی آن در درخواست شما اعمال شده باشد. مقدار true‌ به این معنی است که شما حق استفاده از اطلاعات جهت نمایش تبلیغ شخصی‌سازی شده را به شبکه‌های تبلیغاتی داده‌اید.

```dart
TapsellPlus.instance.setGDPRConsent(true);
```

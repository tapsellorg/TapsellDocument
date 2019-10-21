---
layout: classic-docs
title: راه اندازی تپسل پلاس در فلاتر (اندروید)
lang: fa
permalink: /plus_sdk/flutter/initialize.html
toc: true
---


## اضافه کردن کتابخانه به پروژه
در بخش dependencies فایل pubspec.yaml پروژه خط زیر را اضافه کنید تا پکیج تپسل اضافه شود:

```yaml
dependencies:
  tapsell_plus: ^1.0.0
```

برای نصب بسته ها از خط فرمان، دستور زیر را اجرا کنید:

```bash
flutter pub get
```

اکنون کتابخانه TapsellPlus در کد dart قابل دسترس است.


## مقداردهی اولیه

در صفحه اولیه برنامه باید کتابخانه تپسل پلاس را مقداردهی کنید.

```dart
import 'package:tapsell_plus/tapsell_plus.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    TapsellPlus.initialize(TAPSELL_KEY);

  }
}
```

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که میسازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود، میتوانید از پنل کپی کنید.

## تنظیمات proguard
تنظیمات مربوط به `proguard` در [این فایل](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/proguard-rules.pro) قرار دارد.

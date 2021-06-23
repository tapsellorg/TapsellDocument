---
layout: classic-docs
title: راه اندازی تپسل پلاس در فلاتر (اندروید)
lang: fa
permalink: /plus-sdk/flutter/initialize/index.html
toc: true
---


## اضافه کردن کتابخانه به پروژه
در بخش dependencies فایل pubspec.yaml پروژه خط زیر را اضافه کنید تا پکیج تپسل اضافه شود:

```yaml
dependencies:
  tapsell_plus: ^2.1.2
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

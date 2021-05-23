---
layout: classic-docs
title: راه اندازی تپسل پلاس در ReactNative (Android)
lang: fa
permalink: /plus-sdk/reactnative/initialize-android/index.html
toc: true # table of contents
---


## دریافت SDK تپسل پلاس
برای افزودن پلاگین تپسل‌پلاس به پروژه از کامند زیر استفاده کنید:

```console
npm install react-native-tapsell-plus --save
```


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

---
layout: classic-docs
title: راه اندازی تپسل در ReactNative (Android)
lang: fa
permalink: /tapsell-sdk/react/initialize-android/index.html
toc: true # table of contents
---


## دریافت SDK تپسل
به محل پروژه react native خود بروید و در commad-line دستورهای زیر را به ترتیب وارد کنید :

```console
npm install react-native-tapsell --save
react-native link react-native-tapsell
```


## شروع کار با SDK تپسل
ابتدا ماژول تپسل را به کد خود اضافه کنید:

```javascript
import Tapsell from 'react-native-tapsell'
```

سپس تابع زیر را در یکی از اسکریپت های برنامه ی خود که در ابتدای برنامه اجرا می شود فراخوانی کنید.

```c#
Tapsell.initialize(TAPSELL_KEY);
```

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که میسازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود، میتوانید از پنل کپی کنید.

اکنون میتوانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.

---
layout: classic-docs
title: کلاس Application
toc: false
permalink: /application-class/index.html
lang: fa
---

کلاسی که از `android.app.Application` اکستند شده باشد. این کلاس قبل از همه اکتیویتی‌ها اجرا میشود و جای مناسبی برای مقدار دهی اولیه میباشد. بهتر است تپسل را در این کتابخانه `initialize` کنید.

## افزودن کلاس Application
مطابق روش زیر میتوانید به برنامه خود این کلاس را اضافه کنید.

### ساخت کلاس Application
ابتدا یک کلاس با نام دلخواه مثلا `MyApplication` به پروژه خود اضافه کنید و آنرا از `android.app.Application` اکستند کنید. سپس مطابق کد زیر متد `onCreate` را `Override` کنید.

```java
import android.app.Application;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
    }
}
```

### تنظیمات Manifest
در فایل `AndroidManifest.xml` باید کلاسی که ساختید را مطابق کد زیر به تگ `application` اضافه کنید.

```xml
<application
    android:name=".MyApplication"
    >
```

### مقداردهی تپسل
اکنون کلاس `application` به برنامه اضافه شده، میتوانید تپسل را در متد `onCreate` مقدار دهی کنید.

```java
import ir.tapsell.sdk.Tapsell;
...
public void onCreate() {
    super.onCreate();
    Tapsell.initialize(this, TAPSELL_KEY);
}
```
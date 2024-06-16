---
layout: classic-docs
title: بنر استاندارد در اندروید
lang: fa
permalink: /yelloadwise-app/android/standard/index.html
toc: true # table of contents
---

## ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://business.yelloadwise.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.

## افزودن به Layout
مشابه روش زیر تبلیغ را به layout خود اضافه کنید.

```xml
<ir.yelloadwise.app.bannerads.YelloadwiseBannerView
    android:id="@+id/banner"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:yelloadwise_banner_type="BANNER_SIZE" />
```

مقدار `ZONE_ID` شناسه تبلیغ‌گاه هست که از پنل به آن دسترسی دارید.  
مقدار `BANNER_SIZE` مشخص کننده اندازه بنر هست که از سطون `xml` جدول زیر می‌توانید مقادیر قابل قبول را ببینید.

| `java` | `xml` |
| - | - |
| `YelloadwiseBannerType.BANNER_320x50` | `banner_320x50` |
| `YelloadwiseBannerType.BANNER_320x100` | `banner_320x100` |
| `YelloadwiseBannerType.BANNER_250x250` | `banner_250x250` |
| `YelloadwiseBannerType.BANNER_300x250` | `banner_300x250` |

## درخواست تبلیغ
با روش زیر می‌توانید تبلیغ را نمایش دهید.
```java
YelloadwiseBannerView banner = findViewById(R.id.banner);
banner.loadAd(CONTEXT, ZONE_ID, BANNER_SIZE);
```
باید متد `loadAd` از ویوای که در فایل `xml` از نوع `YelloadwiseBannerView` ساختید را صدا بزنید.  
 ورودی اول `context` هست.  
 ورودی دوم شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
 ورودی سوم سایز بنری هست که میخواهید نمایش بدهید، و از ستون `java` جدول بالا می‌توانید مقادیر قابل قبول را به دست بیاورید. 

### تعریف `listener` برای درخواست
مطابق کد زیر می‌توانید برای درخواست تبلیغ `listener` تعریف کنید.

```java
banner.setEventListener(new YelloadwiseBannerViewEventListener() {
    @Override
    public void onRequestFilled() {
    }

    @Override
    public void onNoAdAvailable() {
    }

    @Override
    public void onNoNetwork() {
    }

    @Override
    public void onError(String message) {
    }

    @Override
    public void onHideBannerView() {
    }
});
```

کاربرد هر متد مطابق جدول زیر است.

| کاربرد | متد |
| - | - |
| جواب درخواست برگشته و تبلیغ نمایش داده میشود | `onRequestFilled` |
| تبلیغی برای نمایش موجود نیست | `onNoAdAvailable` |
| امکان برقراری ارتباط با سرور نیست | `onNoNetwork` |
| خطایی رخ داده متن خطا را می‌توانید از `meesage` ببینید | `onError` |
| هنگام مخفی شدن بنر صدا زده میشود | `onHideBannerView` |

>اگر تمایل دارید در کالبک onError مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک onError مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

## مخفی کردن بنر
با روش زیر می‌توانید بنر نمایش داده شده را مخفی کنید.

```java
banner.hideBannerView();
```
با روش زیر می‌توانید بنر مخفی شده رانمایش دهید.

```java
banner.showBannerView();
```

## از بین بردن بنر
با روش زیر، هنگام خروج از Activity بنر را از بین ببرید تا در پس زمینه تبلیغ بارگذاری نکند.

```java
    @Override
    protected void onDestroy() {
        super.onDestroy();
        YelloadwiseBannerView.destroy();
    }
```

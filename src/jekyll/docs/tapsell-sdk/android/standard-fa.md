---
layout: classic-docs
title: بنر استاندارد در اندروید
lang: fa
permalink: /tapsell-sdk/android/standard/index.html
toc: true # table of contents
---

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.

## افزودن به Layout
مشابه روش زیر تبلیغ را به layout خود اضافه کنید.

```xml
<ir.tapsell.sdk.bannerads.TapsellBannerView
    android:id="@+id/banner"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:tapsell_banner_type="BANNER_SIZE"
    app:tapsell_zone_id="ZONE_ID" />
```

مقدار `ZONE_ID` شناسه تبلیغ‌گاه هست که از پنل به آن دسترسی دارید.  
مقدار `BANNER_SIZE` مشخص کننده اندازه بنر هست که از سطون `xml` جدول زیر می‌توانید مقادیر قابل قبول را ببینید.

| `java` | `xml` |
| - | - |
| `TapsellBannerType.BANNER_320x50` | `banner_320x50` |
| `TapsellBannerType.BANNER_320x100` | `banner_320x100` |
| `TapsellBannerType.BANNER_250x250` | `banner_250x250` |
| `TapsellBannerType.BANNER_300x250` | `banner_300x250` |

## درخواست تبلیغ
با روش زیر می‌توانید تبلیغ را نمایش دهید.
```java
TapsellBannerView banner = findViewById(R.id.banner);
banner.loadAd(CONTEXT, ZONE_ID, BANNER_SIZE);
```
باید متد `loadAd` از ویوای که در فایل `xml` از نوع `TapsellBannerView` ساختید را صدا بزنید.  
 ورودی اول `context` هست.  
 ورودی دوم شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
 ورودی سوم سایز بنری هست که میخواهید نمایش بدهید، و از ستون `java` جدول بالا می‌توانید مقادیر قابل قبول را به دست بیاورید. 

### تعریف `listener` برای درخواست
مطابق کد زیر می‌توانید برای درخواست تبلیغ `listener` تعریف کنید.

```java
banner.setEventListener(new TapsellBannerViewEventListener() {
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

## مخفی کردن بنر
با روش زیر می‌توانید بنر نمایش داده شده را مخفی کنید.

```java
banner.hideBannerView();
```
با روش زیر می‌توانید بنر مخفی شده رانمایش دهید.

```java
banner.showBannerView();
```

---
layout: classic-docs
title: پیاده سازی تبلیغات بنر استاندارد
lang: fa
permalink: /plus_sdk/android/standard.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) بنر استاندارد بسازید و `zoneId` را زمان نمایش تبلیغ استفاده کنید.

### نمایش تبلیغ
در صفحه‌ای که می‌خواهید تبلیغ نمایش داده شود یک `viewGrop` اضافه کنید.

```xml
<RelativeLayout
    android:id="@+id/standardBanner"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="center"
    android:gravity="center" />
```

مطابق کد زیر `zoneId` و view‌ای که معرفی کردید را به تپسل‌پلاس بدهید.

```java
ViewGroup bannerContainer = findViewById(R.id.standardBanner);

TapsellPlus.showBannerAd(
        context, 
        bannerContainer,
        ZONE_ID_STANDARD_BANNER,
        TapsellPlusBannerType.BANNER_320x50,
        new AdRequestCallback() {
            @Override
            public void response() {
            }

            @Override
            public void error(String message) {
            }
});
```
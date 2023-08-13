---
layout: classic-docs
title: پیاده سازی تبلیغات ویدئوی همسان
lang: fa
permalink: /plus-sdk/android/native-vid/index.html
toc: true
---

### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.yelloadwise.ir/) یک تبلیغ‌گاه (zone) ویدئو همسان بسازید و `zoneId` را زمان درخواست تبلیغ استفاده کنید.

### ساخت AdHolder
در صفحه‌ای که قصد دارید بنر همسان نمایش بدهید باید یک `ViewGroup` به عنوان فضایی که قصد دارید تبلیغات در آن نمایش داده شود اضافه کنید (adContainer).

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <FrameLayout
        android:id="@+id/adContainer"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

    </FrameLayout>

</FrameLayout>
```

### درخواست تبلیغ

برای درخواست یک تبلیغ ویدئوی همسان از کد زیر استفاده کنید:

```java
String zoneId = "theZoneIdYouHavaForThis";
String responseId = "";

Yelloadwise.requestNativeVideo(this, zoneId, new AdRequestCallback() {
    @Override
    public void response(YelloadwiseAdModel YelloadwiseAdModel) {
        responseId = YelloadwiseAdModel.getResponseId(); // SAVE the responseID
    }
    @Override
    public void error(String s) {
      // ERROR occurred
    }
});
```

سپس responseId را ذخیره کنید. این شناسه برای نمایش تبلیغ نیاز است.

### نمایش تبلیغ

موارد زیر از مراحل قبل مورد نیاز هستند:  
- responseId
- adContainer

برای نمایش تبلیغ ابتدا یک شی از کلاس `YelloadwiseVideoAdHolder` مطابق فرمت زیر بسازید و سپس درخواست نمایش تبلیغ را فراخوانی کنید:

```java
YelloadwiseVideoAdHolder holder = new YelloadwiseVideoAdHolder.Builder()
  .setContentViewTemplate(ir.yelloadwise.core.R.layout.yelloadwise_content_video_ad_template)
  .setAppInstallationViewTemplate(ir.yelloadwise.core.R.layout.yelloadwise_app_installation_video_ad_template)
  .setAdContainer(findViewById(R.id.adContainer))
  .build();

Yelloadwise.showNativeVideo(this, responseId, holder, new AdShowListener() {
    @Override
    public void onOpened(YelloadwiseAdModel YelloadwiseAdModel) {
      // Video Ad is opened
    }
    @Override
    public void onError(YelloadwiseErrorModel YelloadwiseErrorModel) {
      // Error when showing video ad
    }
});
```

در صورتی که قصد دارید Layout مورد نظر خود را استفاده کنید و idهای لیست زیر را مطابق نوع view اختصاص دهید:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `yelloadwise_nativead_logo`    | `ImageView`  |
|     title    |    `yelloadwise_nativead_title`    | `TextView`  |
| ad indicator |  `yelloadwise_nativead_sponsored`  | `View`  |
|  description | `yelloadwise_nativead_description` | `TextView`  |
|    banner    |    `yelloadwise_nativead_video`   | ir.yelloadwise.core.nativeads.views.videoplayer.VideoContainer  |
|    button    |     `yelloadwise_nativead_cta`     | `TextView`  |
| rating |  `yelloadwise_nativead_rating`  | ir.yelloadwise.core.nativeads.views.RateStarView  |

کلید rating فقط برای حالت تبلیغی که نصب اپلیکیشن دارد استفاده می‌شود.

سپس این layoutها را به AdHolder بدهید:

```java
YelloadwiseVideoAdHolder holder = new YelloadwiseVideoAdHolder.Builder()
  .setContentViewTemplate(R.layout.my_custom_native_video_layout)
  .setAppInstallationViewTemplate(R.layout.my_custom_native_video_application_layout)
  .setAdContainer(findViewById(R.id.adContainer))
  .build();
```

> تابع `setAppInstallationViewTemplate` به layoutی که دارای idی `rating` است اشاره دارد.

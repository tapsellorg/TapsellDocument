---
layout: classic-docs
title: پیاده سازی تبلیغات ویدئوی همسان
lang: fa
permalink: /plus-sdk/android/native-vid/index.html
toc: true
---

### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه (zone) ویدئو همسان بسازید و `zoneId` را زمان درخواست تبلیغ استفاده کنید.

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

TapsellPlus.requestNativeVideo(this, zoneId, new AdRequestCallback() {
    @Override
    public void response(TapsellPlusAdModel tapsellPlusAdModel) {
        responseId = tapsellPlusAdModel.getResponseId(); // SAVE the responseID
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

برای نمایش تبلیغ ابتدا یک شی از کلاس `TapsellPlusVideoAdHolder` مطابق فرمت زیر بسازید و سپس درخواست نمایش تبلیغ را فراخوانی کنید:

```java
TapsellPlusVideoAdHolder holder = new TapsellPlusVideoAdHolder.Builder()
  .setContentViewTemplate(ir.tapsell.sdk.R.layout.tapsell_content_video_ad_template)
  .setAppInstallationViewTemplate(ir.tapsell.sdk.R.layout.tapsell_app_installation_video_ad_template)
  .setAdContainer(findViewById(R.id.adContainer))
  .build();

TapsellPlus.showNativeVideo(this, responseId, holder, new AdShowListener() {
    @Override
    public void onOpened(TapsellPlusAdModel tapsellPlusAdModel) {
      // Video Ad is opened
    }
    @Override
    public void onError(TapsellPlusErrorModel tapsellPlusErrorModel) {
      // Error when showing video ad
    }
});
```

در صورتی که قصد دارید Layout مورد نظر خود را استفاده کنید و idهای لیست زیر را مطابق نوع view اختصاص دهید:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `tapsell_nativead_logo`    | `ImageView`  |
|     title    |    `tapsell_nativead_title`    | `TextView`  |
| ad indicator |  `tapsell_nativead_sponsored`  | `View`  |
|  description | `tapsell_nativead_description` | `TextView`  |
|    banner    |    `tapsell_nativead_video`   | ir.tapsell.sdk.nativeads.views.videoplayer.VideoContainer  |
|    button    |     `tapsell_nativead_cta`     | `TextView`  |
| rating |  `tapsell_nativead_rating`  | ir.tapsell.sdk.nativeads.views.RateStarView  |

کلید rating فقط برای حالت تبلیغی که نصب اپلیکیشن دارد استفاده می‌شود.

سپس این layoutها را به AdHolder بدهید:

```java
TapsellPlusVideoAdHolder holder = new TapsellPlusVideoAdHolder.Builder()
  .setContentViewTemplate(R.layout.my_custom_native_video_layout)
  .setAppInstallationViewTemplate(R.layout.my_custom_native_video_application_layout)
  .setAdContainer(findViewById(R.id.adContainer))
  .build();
```

> تابع `setAppInstallationViewTemplate` به layoutی که دارای idی `rating` است اشاره دارد.
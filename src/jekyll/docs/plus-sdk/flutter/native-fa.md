---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در فلاتر
lang: fa
permalink: /plus-sdk/flutter/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
با روش زیر درخواست تبلیغ بدهید.

```dart
final zoneId = "theZoneIdYouHave";
TapsellPlus.instance.requestNativeAd(zoneId).then((responseId) {
      // SAVE the responseId
    }).catchError((error) {
      // Error requesting for an ad
    });
```
خروجی تابع یک
Future
است که در صورت
success
شدن یک
**responseId**
برمیگرداند.

این شناسه برای نمایش تبلیغ مورد نیاز است.


### نمایش تبلیغ

```dart
TapsellPlus.instance.showNativeAd(id, onOpened: (nativeAd) {
  if (nativeAd is GeneralNativeAdPayload) {
    // Use `nativeAd.ad` object to show the native ad
  }
}, onError: (errorPayload) {
   // Error when getting ad info
});
```

###  نمایش تبلیغ در ادموب
در صورتیکه قصد نمایش تبلیغ ادموب را دارید، لازم است طبق مراحل زیر عمل نمایید.

۱. ابتدا ویوی مد نظر خود را به صورت xml در مسیر `android/app/src/main/res/layout` در پروژه خود بسازید. مطابق مثال زیر:


```xml
<!--native_ad.xml-->
<com.google.android.gms.ads.nativead.NativeAdView
  xmlns:android="http://schemas.android.com/apk/res/android"
  android:layout_width="match_parent"
  android:layout_height="match_parent">
  
<!--  Add you view here-->
  
</com.google.android.gms.ads.nativead.NativeAdView>
```

۲. برای ساختن ویو و متصل کردن آن به ادموب لازم است یک کلاس `AdmobNativeAdFactory` مشابه زیر برای آن بسازید.

```kotlin
class AdmobNativeAdFactory(private val context: Context) : GoogleMobileAdsPlugin.NativeAdFactory {
    override fun createNativeAd(
        nativeAd: NativeAd,
        customOptions: MutableMap<String, Any>?
    ): NativeAdView {
        val nativeAdView = LayoutInflater.from(context)
            .inflate(R.layout.native_ad, null) as NativeAdView
            
            // find view id here.
            
        return nativeAdView
    }
}
```
> برای راهنمایی بیشتر، می‌توانید از [اپ سمپل](https://github.com/tapsellorg/TapsellPlusSDK-FlutterSample) استفاده کنید.
{:data-title="اپ سمپل" data-color="red"}

۳. سپس برای فعال سازی یا غیر فعال سازی کلاس `AdmobNativeAdFactory` ساخته شده، وارد مسیر `src/main/java/MainActivity` شوید و قطعه کد های زیر را اضافه نمایید:

```kotlin
val MY_FACTORY_ID = "MY_NATIVE_AD"

override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
   super.configureFlutterEngine(flutterEngine)
   
   // Register you factory using "MY_FACTORY_ID"
   GoogleMobileAdsPlugin.registerNativeAdFactory(
            flutterEngine,
            MY_FACTORY_ID,
            AdmobNativeAdFactory(context)
        );
}
```

```kotlin
override fun cleanUpFlutterEngine(flutterEngine: FlutterEngine) {
   super.cleanUpFlutterEngine(flutterEngine)
   GoogleMobileAdsPlugin.unregisterNativeAdFactory(
            flutterEngine,
            MY_FACTORY_ID
        );
}
```
برای register کردن و unregister کردن ویوی های مختلف ادموب در پروژه خود نیاز به تعریف `FACTORY_ID` مخصوص هر ویو دارید. این `FACTORY_ID` بعدا در هنگام نمایش تبلیغ در بخش فلاتر مورد استفاده قرار می‌گیرد.

۴. اکنون درخواست نمایش تبلیغ را به صورت زیر انجام دهید:

```dart
TapsellPlus.instance.showNativeAd(id, admobFactoryId: factoryId, 
onOpened: (nativeAd) {
  
  if (nativeAd is GeneralNativeAdPayload) {
    
    // Use `nativeAd.ad` object to show the native ad
    
  } else if (nativeAd is AdMobNativeAdPayload) {
    
    // Use `NativeAd.ad` object to bind the widget to the admob native ad view
  
  }
}, 
onLoaded: (nativeAd) {
  
  if (nativeAd is AdMobNativeAdPayload) {
    
     // You can ensure that admob ad view is loaded here to notify the UI to show the ad widget
  
  } else if (nativeAd is AdMobNativeAdViewPayload) {
    
    // pass `nativeAd.nativeAdView` as ad object to the admob `AdWidget`
  
  }
}, onError: (errorPayload) {
  
   // Error when getting ad info
  
});
```

| پارامتر | توضیحات |
|--|--|
| `responseId` | شناسه‌ی دریافتی از تابع درخواست |
| `onOpened(nativeAd: NativeAdPayload)` | در صورت موفقیت آمیز بودن، دیتای لازم با فرمت جدول بعدی در ورودی این کالبک خواهد بود |
| `onError(errorPayload: Map<String, String>)` | در صورت رخداد هر گونه خطا |

برای نمایش تبلیغ، می‌بایست از فیلدهای موجود در آبجکت `nativeAd` و استفاده کنید.

| توضیحات | تابع |
|--|--|
| شناسه تبلیغ | `adId : string` |
| محتوای تبلیغ ادموب | `ad : Ad` |
| ویوی تبلیغ ادموب | `nativeAdView : NativeAd` |
| عنوان تبلیغ | `title : string` |
| توضیحات تبلیغ | `description : string` |
| متن دعوت کننده از کاربر به کلیک/نصب  | `callToActionText : string` |
| آدرس آیکون تبلیغ | `iconUrl : string` |
| تصویر افقی تبلیغ | `portraitImageUrl : string` |
| تصویر عمودی تبلیغ | `landscapeImageUrl : string` |
  

### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```dart
TapsellPlus.instance.nativeBannerAdClicked(responseId);
```

---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در یونیتی
lang: fa
permalink: /plus-sdk/unity/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
با کمک متد `TapsellPlus.requestNativeBanner` و به روش زیر درخواست تبلیغ بدهید.

```c#
TapsellPlus.requestNativeBanner (CONTEXT, ZONE_ID,
    (TapsellPlusNativeBannerAd result) => {
      Debug.Log ("on response");
      //showing ad
      nativeAd = result;
    },
    (TapsellError error) => {
      Debug.Log ("Error " + error.message);
    }
  );
```

### نمایش تبلیغ
متغیر برگردانده شده در onRequestResponse() محتوای تبلیغ بوده و برای نمایش هر کدام، می‌بایستی آن را در یک GameObject استفاده نمایید.


| Variable | Type | Usage |
| - | - | - |
| `title` | string | عنوان تبلیغ |
| `description`| string | توضیحات |
| `landscapeBannerImage`| Texture2D | تصویر تبلیغ |
| `callToActionText` | string | متن دکمه کلیک |

به عنوان مثال اگر یک GameObject از نوع RawImage به نام adImage در اختیار دارید، به کمک تکه کد زیر می‌توانید تصویر تبلیغ را در آن نمایش دهید:
```c#
...
// Get nativeAd in onRequestRespons
adImage.texture = nativeAd.landscapeBannerImage;
...
```

### باز کردن تبلیغ
برای باز کردن تبلیغ می‌باید ابتدا به هر کدام از GameObjectهایی که در مرحله‌ی پیش ایجاد کرده‌اید، یک Component از جنس Box Collider اضافه کنید و سپس Game Object را از طریق متدهای زیر به تپسل‌پلاس معرفی کنید. 

> دقت کنید که برای هر کدام از Game Objectها تیک Raycast Target را زده باشید به جز Button که تیک Raycast Target را از کامپوننت Image آن باید بردارید.

| Method | Register |
| - | - |
| `RegisterHeadlineTextGameObject` | عنوان تبلیغ |
| `RegisterBodyTextGameObject` | توضیحات |
| `RegisterImageGameObject` | تصویر تبلیغ |
| `RegisterCallToActionGameObject` | متن دکمه کلیک |

```c#
...
nativeAd.RegisterImageGameObject(adImage.gameObject);
...
```

برای راهنمایی بیش‌تر می‌توانید از پروژه‌های نمونه‌ی ما بر روی Github استفاده نمایید.
<!-- [پروژه‌ی نمونه مناسب برای Unity 2020](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2020/releases/download/v2.3/TapsellPlusUnity2020Gradle-v2.3.unitypackage)
\ -->
[پروژه‌ی نمونه مناسب برای Unity 2019](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2019)
<!-- \
[پروژه‌ی نمونه مناسب برای Unity 2018](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2018/releases/download/v2.3/TapsellPlusUnity2018Gradle-v2.3.unitypackage)
\
[پروژه‌ی نمونه مناسب برای Unity 2017](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2017/releases/download/v2.3/TapsellPlusUnity2017Gradle-v2.3.unitypackage) -->
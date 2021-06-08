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
با کمک متد `TapsellPlus.RequestNativeBannerAd` و به روش زیر درخواست تبلیغ بدهید.

```c#
TapsellPlus.RequestNativeBannerAd(ZoneID,

			tapsellPlusAdModel => {
				Debug.Log ("On Response " + tapsellPlusAdModel.responseId);
				_responseId = tapsellPlusAdModel.responseId;
			},
			error => {
				Debug.Log ("Error " + error.message);
			}
		);
```

>اگر تمایل دارید در کالبک error مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک error مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

### نمایش تبلیغ
بعد از اجرای متد `response` و دریافت پارامتر `responseId` تبلیغ آماده نمایش است و می‌توانید مطابق روش زیر آن را نمایش دهید.

```c#
public void Show () {
  TapsellPlus.ShowNativeBannerAd(_responseId, CONTEXT,

			tapsellPlusNativeBannerAd => {
				Debug.Log ("onOpenAd " + tapsellPlusNativeBannerAd.zoneId);
				adHeadline.text = ArabicSupport.ArabicFixer.Fix(tapsellPlusNativeBannerAd.title);
				adCallToAction.text = ArabicSupport.ArabicFixer.Fix(tapsellPlusNativeBannerAd.callToActionText);
				adBody.text = ArabicSupport.ArabicFixer.Fix(tapsellPlusNativeBannerAd.description);
				adImage.texture = tapsellPlusNativeBannerAd.landscapeBannerImage;
        
				tapsellPlusNativeBannerAd.RegisterImageGameObject(adImage.gameObject);
				tapsellPlusNativeBannerAd.RegisterHeadlineTextGameObject(adHeadline.gameObject);
				tapsellPlusNativeBannerAd.RegisterCallToActionGameObject(adCallToAction.gameObject);
				tapsellPlusNativeBannerAd.RegisterBodyTextGameObject(adBody.gameObject);
			},
			error => {
				Debug.Log ("onError " + error.errorMessage);
			}
		);
}
```

| Variable | Type | Usage |
| - | - | - |
| `title` | string | عنوان تبلیغ |
| `description`| string | توضیحات |
| `landscapeBannerImage`| Texture2D | تصویر تبلیغ |
| `callToActionText` | string | متن دکمه کلیک |
| `iconImage` | Texture2D | آیکون تبلیغ |

به عنوان مثال اگر یک GameObject از نوع RawImage به نام adImage در اختیار دارید، به کمک تکه کد زیر می‌توانید تصویر تبلیغ را در آن نمایش دهید:
```c#
...
adImage.texture = tapsellPlusNativeBannerAd.landscapeBannerImage;
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

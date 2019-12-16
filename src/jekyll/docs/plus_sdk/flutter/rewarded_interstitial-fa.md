---
layout: classic-docs
title: پیاده سازی تبلیغات جایزه‌ای/آنی
lang: fa
permalink: /plus_sdk/flutter/rewarded_interstitial/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) جایزه‌ای/آنی بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### درخواست تبلیغ
مطابق کد زیر میتوانید با استفاد از متد `TapsellPlus.requestRewardedVideo` درخواست تبلیغ بدهید.
```dart
import 'package:tapsell_plus/tapsell_plus.dart';

  void requestRewardedVideo() {
    TapsellPlus.requestRewardedVideo(
        Constant.TAPSELL_REWARDED_VIDEO,
        (zoneId) => response(zoneId),
        (zoneId, errorMessage) => error(zoneId, errorMessage));
  }

  response(zoneId) {
    print("success: zone_id = $zoneId");
  }

  error(zoneId, errorMessage) {
    print('error caught: zone_id = $zoneId, message = $errorMessage');
  }
```

برای تبلیغ آنی از متد `TapsellPlus.requestInterstitial` استفاده کنید.


### نمایش تبلیغ
بعد از اجرای متد `response` تبلیغ آماده نمایش است و میتوانید مطابق روش زیر نمایش دهید.

```dart
  void showRewardedVideo() {
    TapsellPlus.showAd(Constant.TAPSELL_REWARDED_VIDEO,
        opened: (zoneId) => opened(zoneId),
        closed: (zoneId) => closed(zoneId),
        rewarded: (zoneId) => rewarded(zoneId),
        error: (zoneId, errorMessage) => error(zoneId, errorMessage));
  }

  opened(zoneId) {
    print("opened: zone_id = $zoneId");
  }

  closed(zoneId) {
    print("closed: zone_id = $zoneId");
  }

  rewarded(zoneId) {
    print("rewarded: zone_id = $zoneId");
  }

  error(zoneId, errorMessage) {
    print('error caught: zone_id = $zoneId, message = $errorMessage');
  }
  ```
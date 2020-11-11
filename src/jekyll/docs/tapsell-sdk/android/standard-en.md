---
layout: classic-docs
title: Standard Banner
lang: en
permalink: /tapsell-sdk/android/standard/index.html
toc: true # table of contents
---

## Creating a Zone
First, create a standard zone from the [Tapsell panel](https://dashboard.tapsell.ir/).

## Adding to Layout
Add the banner ad to your layout using the following lines of code:

```xml
<ir.tapsell.sdk.bannerads.TapsellBannerView
    android:id="@+id/banner"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:tapsell_banner_type="BANNER_SIZE"
    app:tapsell_zone_id="ZONE_ID" />
```

You can find the value of `ZONE_ID` in your Tapsell panel.  
The value of `BANNER_SIZE` determines the size of the banner. You can see the acceptable values for it in the `xml` column of the table below:

| `java` | `xml` |
| - | - |
| `TapsellBannerType.BANNER_320x50` | `banner_320x50` |
| `TapsellBannerType.BANNER_320x100` | `banner_320x100` |
| `TapsellBannerType.BANNER_250x250` | `banner_250x250` |
| `TapsellBannerType.BANNER_300x250` | `banner_300x250` |

## Requesting Ads
You can use the following lines of code to show the ad:
```java
TapsellBannerView banner = findViewById(R.id.banner);
banner.loadAd(CONTEXT, ZONE_ID, BANNER_SIZE);
```
You have to call the `loadAd` method in the view you made in the `xml` file, which is of the `TapsellBannerView` type.
The first argument is `context`.  
The second argument is the zone id you made in the panel.
The third argument is the size of the banner you want to display. You can see the acceptable values for it in the `java` column of the table above.

### Defining a Listener for Requesting Ads
You can define a `listener` for requesting an ad using the code below:

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

The functionality of each method is explained in the table below:

| Functionality | Method |
| - | - |
| The response of the request is returned and the ad is displayed | `onRequestFilled` |
| There are no ads available | `onNoAdAvailable` |
| Connection error | `onNoNetwork` |
|  It is called when an error occurs during the process of showing the ad | `onError` |
|  It is called when the banner is hidden | `onHideBannerView` |

## Hiding the Banner
You can hide the shown banner using the line below:

```java
banner.hideBannerView();
```
You can show the hidden banner using the line below:

```java
banner.showBannerView();
```

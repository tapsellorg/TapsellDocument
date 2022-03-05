---
layout: classic-docs
title: Native Banner in Unity
lang: en
permalink: /plus-sdk/unity/native/index.html
toc: true # table of contents
---

### Creating a Zone
First, create a native zone from the [Tapsell panel](https://dashboard.tapsell.ir/) and use the `zoneId` when requesting or showing an ad.

### Requesting Ads
Use the `TapsellPlus.RequestNativeBannerAd` method to request an ad. For example:

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

> If you want to request again in error Callback, Be sure to do this with the help of a variable as a Counter.
> Because with the help of that variable you can set a limit on the number of times for request.
> For example, when you disable this adZone from the panel and if you request again each time in error Callback , without limiting the number of times, 
> Your program will fall into an infinite loop and its performance will get disrupted
{:data-title="Retry requests" data-color="green"}

### Showing Ads

After receiving the `responseId` parameter from the previous step, the Ad is ready to be shown, and you can display it as the following

```c#
public void Show () {
  // this: refers to MonoBehaviour
  TapsellPlus.ShowNativeBannerAd(_responseId, this,

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
| `title` | string | Ad Title |
| `description`| string | Description |
| `landscapeBannerImage`| Texture2D | Ad image |
| `callToActionText` | string | Click button text |
| `iconImage` | Texture2D | Ad icon |

For example, if you have a RawImage from GameObject type called adImage, you can use the following code snippet to display the ad image:

```c#
// ...
adImage.texture = tapsellPlusNativeBannerAd.landscapeBannerImage;
// ...
```

### Opening the Ad
To open the ad, you should first add a component from Box Collider type to every GameObjects you created in the previous step, and then define the Game Object to TepsellPlus using the following methods.

> Make sure you check the Raycast Target for each of the Game Objects, except for the Button, which you must uncheck Raycast Target from its Image component.

| Method | Register |
| - | - |
| `RegisterHeadlineTextGameObject` | Ad Title |
| `RegisterBodyTextGameObject` | Description |
| `RegisterImageGameObject` | Ad image |
| `RegisterCallToActionGameObject` | Click button text |

```c#
// ...
nativeAd.RegisterImageGameObject(adImage.gameObject);
// ...
```

You can use our sample projects on GitHub for more help.


---
layout: classic-docs
title: Initialization of Tapsell Plus SDK in Unity (iOS)
lang: en
permalink: /plus-sdk/unity/initialize-ios/index.html
toc: true # table of contents
---

> If there is a problem or ambiguity, please refer to [common issues]({{site.baseurl}}/faq/plus-sdk/unity/) or check the [GitHub Issues](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2019/issues?Q=is%3Aissue) page.
{:data-title="Project build note" data-color="red"}

## Cocoapods installation
Tepsell Plus has been published on `Cocoapods` for easy use. If you have not yet installed Cocoapods on your system, you can do this with the following command:

```console
$ sudo gem install cocoapods
```

For more information, visit [Cocoapods](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample/releases/download/v2.1/TapsellPlusUnity-v2.1.unitypackage) 

## Adding Tepsell Plus to Podfile
Add the following lines to your Podfile:

```pod
pod ‘TapsellPlusSDK’, ‘1.0.0’
pod ‘TapsellPlusSDK/UnityPlugin’, ‘1.0.0’
```

With this line, Tepsell Plus and all the required libraries are downloaded, the required configs are applied for each of them and added to your project.


## Updating the project's `info.plist` file
With the release of iOS 9, Apple introduced the ATS system, which requires applications to apply specific settings to network communications using SSL. Currently, it is necessary to disable Tepsell ATS in the application to use the ads. To avoid the impact of ATS on displaying ads, add the following to your project's `info.plist` file.

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

## Adding URL Schemes
With the release of iOS 9, Apple has restricted inter-app communications (canOpenUrl), and each app must specify what other apps it will open. Tepsell uses the canOpenUrl function to decide on the final action on banner ads. To enable deep-linking between the Tepsell SDK and various services, add the following code to your project's `info.plist` file.

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>mailto</string>
    <string>itms-apps</string>
    <string>sms</string>
    <string>tel</string>
</array>
```

## Updating Build Settings
Add the -ObjC flag to Other Linker Flags in Build Setting.
Then enable the Always Embed Swift Standard Libraries flag in your project.

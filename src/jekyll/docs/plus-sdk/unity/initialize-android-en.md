---
layout: classic-docs
title: Initialization of Tapsell Plus SDK in Unity (Android)
lang: en
permalink: /plus-sdk/unity/initialize-android/index.html
toc: true # table of contents
---

> If there is a problem or ambiguity, please refer to [common issues]({{site.baseurl}}/faq/plus-sdk/unity/) or check the [GitHub Issues](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2019/issues?Q=is%3Aissue) page.
{:data-title="Project build note" data-color="red"}

## Adding Tapsell Plus Unity package

1. First, download the [unitypackage resolver](https://github.com/googlesamples/unity-jar-resolver/tags) file. Then add
   it to your project according to the description of the following link:

   [Google Documentation](https://github.com/googlesamples/unity-jar-resolver#android-resolver-usage)

2. check `Jetifier` and` Auto Resolution` from the following menus: (Auto Resolution check is optional, but it's better
   to enable it so that you do not have to resolve libraries manually each time)

    ```console
    Assets > External Dependency Manager > Android Resolver > Settings > Use Jetifier
    Assets > External Dependency Manager > Android Resolver > Settings > Enable Auto-Resolution
    ```

3. First, download Tepsell Plus `unitypackage`
   from [this link](https://github.com/tapsellorg/TapsellPlusSDK-UnityPlugin/releases/download/v2.2.6/tapsell-plus-unity-2.2.6.unitypackage)
   .
4. Add the downloaded `unitypackage` to your project as follows: (If the `TapsellPlusSDK` folder already exists in your
   project, please remove it).

    ```console
    Assets > Import Package > Custom Package...
    ```

5. Resolve libraries through the following menu to ensure that the Tapsell Plus plugin is added:

    ```console
    Assets > External Dependency Manager > Android Resolver > Force Resolve
    ```

6. Add your own custom Gradle build file by enabling related checkboxes as follows:

    ```console
    Edit > Project Setting... > Player > Publishing Settings > Custom Launcher Gradle Template
    Edit > Project Setting... > Player > Publishing Settings > Custom Base Gradle Template
    Edit > Project Setting... > Player > Publishing Settings > Custom Gradle Properties Template
    ```

7. To enable AndroidX, go to `Assets\Plugins\Android\gradle.properties` and add the following code snippet to it:
    ```gradle
    android.useAndroidX=true
    android.enableJetifier=true
    ```

8. Go to `Assets\Plugins\Android\launcherTemplate.gradle`, and add the following code snippet to it if not already
   added:

    ```gradle
    android {
      compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
      }
    }
    ```

9. Go to `Assets\Plugins\Android\baseProjectTemplate.gradle` and add `mavenCentral()` to both `repositories`. Then
   change the version of `com.android.tools.build:gradle` to 4.2.2.

    > Note that at least version 3.6.0 is required for the Android Gradle Plugin to support Android 11 in the project. You can get help from [this link](https://developers.google.com/ar/develop/unity/android-11-build) to add a version of Gradle that supports Android 11.

10. After adding TapsellPlus and other Ad Networks, you will probably need to enable MultiDex due to the increase in
    code size and method counts to prevent the following error. If you are using the Android `minSDKVersion` API 21 or
    above, `MultiDex` is activated by default. otherwise you need to enable it manually.

    ```console
    D8: Cannot fit requested classes in a single dex file (# methods: 68109 > 65536)
    ```

    To enable MultiDex, go to `Assets\Plugins\Android\launcherTemplate.gradle` and add the following code snippet to it:

    ```gradle
    dependencies {
      def multidex_version = "2.0.1"
      implementation "androidx.multidex:multidex:$multidex_version" // 2.0.1
    }
   
    android {
      ...
      defaultConfig {
        ...
        multiDexEnabled true
      }
      ...
    }
    ```
    Then Go to `Assets\Plugins\Android\AndroidManifest.xml` and apply one of the `a.`,` b.`, or `c.` Depending on your
    project's implementation:

    a. If you haven't already added the `Application` class to your project, add the following code snippet to
    your `AndroidManifest.xml`:
    ```xml
    <application
     android:name="androidx.multidex.MultiDexApplication" >
    <!--  ...-->
    </application>
    ```
    b. Otherwise, If you have already added the `Application` class to your project, and you have configured it in
    your `AndroidManifest.xml` , Go to your `Application` class and extend it from `MultiDexApplication` as follows:
    ```java
    public class MainApplication extends MultiDexApplication {
    // your code
    }
    ```
    c. But, If you extend the `Application` class from another class, and you can't extend it from `MultiDexApplication`
    , you can `override` the `attachBaseContext` method as follows:
    ```java
    public class MainApplication extends SomeOtherApplication {
    // your code
    
            @Override
            protected void attachBaseContext(Context base) {
                super.attachBaseContext(base);
                MultiDex.install(this);
            }
        }
    ``` 

You can also refer to [official documentation](https://developer.android.com/studio/build/multidex) for more
information.

### Android 13 support
Apps updating their target API level to 33 (Android 13) will need to declare a Google Play services permission in the manifest file in `Assets\Plugins\Android\AndroidManifest.xml` as follows:

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID"/>
```

Read more about Google Advertising ID changes [here](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en).

## Initialization

First, use the following code snippet to access Tepsell dependency codes.

    ```c#
    using TapsellPlusSDK;
    ```

Then call the following function in one of your application scripts that runs at the beginning of the program.

    ```c#
    TapsellPlus.Initialize(TAPSELLPLUS_KEY,
                adNetworkName => Debug.Log(adNetworkName + " Initialized Successfully."),
                error => Debug.Log(error.ToString()));
    ```

`TAPSELLPLUS_KEY` is the key of TepsellPlus and it is created in [Tepsell panel](https://dashboard.tapsell.ir/) for
every application you create and you can copy it from the panel.

You can now display the desired ad according to your needs and the description of each type of ad.

## GDPR Configuration

Given that The Tepsel Plus library complies with the GDPR rules for displaying personalized ads, by default if the user
uses your application with the IP of one of the countries covered by this law, it will display a dialog to user. If you
want to determine the necessary access by yourself, instead of the user's decision, you can use the following code
snippet, you can use the following code snippet. Note that this code snippet must be called after Tepsel Plus is
initialized and before the ad request is applied to the result of your request. A value of true‌ means that you give ad
networks the right to use the information to display personalized advertising.
```c# TapsellPlus.SetGdprConsent(true);
```

### Family Policy

According to
the [GooglePlay Family Policy](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en), if any of
the target audiences for your app is children (especially if you're developing a game), your app's content must be
appropriate for these type of users. Also, you are not allowed to collect some personal information like Google
Advertising ID. However, the third party advertising SDKs need this advertising id to provide and serve personalized ads
for users. As a result, in Tapsell SDK all users are treated as 13 or older. So as an application developer if you're
going to publish your app in GooglePlay, you need to express that your app targets audiences with age of 13 or older.
Otherwise, your app will be removed from GooglePlay according to this policy.

## Sample Project

for more information, please refer to the sample projects on Github.

* [Sample project compatible with Unity 2021.3.5f1 LTS](https://github.com/tapsellorg/TapsellPlusSDK-UnityPlugin)

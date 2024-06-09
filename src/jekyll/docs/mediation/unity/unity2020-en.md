---
layout: no-sidebar-classic-docs
title: Tapsell Mediation for Unity 2020 or below
lang: en
permalink: /mediation/unity/unity2020/index.html
toc: true
---

<br/>

# Tapsell Mediation for Unity 2020 or below

Consider the following steps to install Tapsell Mediation in `Unity 2020` or below:

- Update the Unity Editor's default Gradle to version `6.7.1+` from [this link](https://gradle.org/releases) and open Unity `Preferences > External Tools` and set the custom Gradle path as follows:

    <img src="https://github.com/tapsellorg/TapsellDocument/assets/38072572/3288f703-a9a6-4b9f-b06a-319f47bf6848" alt="unity-gradle-path" />

- The Android SDK version should be updated to a version with `Android 13+` support. See [this link](https://docs.unity3d.com/Manual/android-sdksetup.html) for more information
  - At least, You need to download `build-tools` and `platforms` for `API 33` from `UnityHub` or `AndroidStudio`.
- Enable `Custom Main Manifest` checkbox from `Player Settings > Publisher Settings > Build` as follows:

  <img width="300" src="https://github.com/tapsellorg/TapsellDocument/assets/38072572/d6ce3fcc-77fb-4ba9-9a45-cc62e5cd394f" alt="custom-main-manifest" />

- If you face any compile errors, Consider enabling `Custom Base Gradle Template` checkbox from `Player Settings > Publisher Settings > Build` and update Gradle plugin to version `4.2.2`:

  <img width="300" src="https://github.com/tapsellorg/TapsellDocument/assets/38072572/1c675ce5-7893-4e6f-af01-7f7013591911" alt="base-gradle" />

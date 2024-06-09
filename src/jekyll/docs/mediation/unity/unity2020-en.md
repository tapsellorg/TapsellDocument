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

    <img src="../images/unity-gradle-path" alt="unity-gradle-path" />

- The Android SDK version should be updated to a version with `Android 13+` support. See [this link](https://docs.unity3d.com/Manual/android-sdksetup.html) for more information
  - At least, You need to download `build-tools` and `platforms` for `API 33` from `UnityHub` or `AndroidStudio`.
- Enable `Custom Main Manifest` checkbox from `Player Settings > Publisher Settings > Build` as follows:

  <img src="../images/mediation-unity-custom-main-manifest" alt="custom-main-manifest" />

- If you face any compile errors, Consider enabling `Custom Base Gradle Template` checkbox from `Player Settings > Publisher Settings > Build` and update Gradle plugin to version `4.2.2`:

  <img src="../images/mediation-unity-base-gradle" alt="base-gradle" />

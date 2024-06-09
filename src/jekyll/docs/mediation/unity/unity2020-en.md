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

- Update the Unity Editor's default Gradle to version `6.7.1+`.
- The Android SDK version should be updated to a version with `Android 13+` support.
  - At least, You need to download `build-tools` and `platforms` for `API 33` from `UnityHub` or Google resources.
- Enable `Custom Main Manifest` checkbox from `Player Settings > Publisher Settings > Build` as follows:

  <img src="/images/mediation-unity-custom-main-manifest" alt="custom-main-manifest" />

- If you face any compile errors, Consider enabling `Custom Base Gradle Template` checkbox from `Player Settings > Publisher Settings > Build` and update Gradle plugin to version `4.2.2`:

  <img src="/images/mediation-unity-base-gradle" alt="base-gradle" />

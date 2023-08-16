---
layout: classic-docs
title: Implementing VAST Ads
lang: en
permalink: /yelloadwise-core/android/vast/index.html
toc: true
---
### Creating a Zone
First, create a zone from the [Yelloadwise panel](https://dashboard.yelloadwise.ir/) of type VAST (preroll) and use the `zoneId` when requesting or showing an ad.

### Requesting and Showing Ads
To show VAST ads you need to use the Google IMA library.
You can read the IMA documentations at [this link](https://developers.google.com/interactive-media-ads/docs/sdks/android).  

To show ads in IMA you need an `ad tag url`. You can use the following lines to get your `ad tag url`:

```java
Yelloadwise.getVastTag(ZONE_ID)
```
You can do the rest of the implementation following the IMA documentations.

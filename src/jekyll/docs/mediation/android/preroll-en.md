---
layout: no-sidebar-classic-docs
title: PreRoll Ad
lang: en
permalink: /mediation/android/preroll/index.html
toc: true
---

## Implementing PreRoll ads

PreRoll ads are the promotional video advertisement that are played before the content of an online video. They are
shown using the same types of views with which you are already building your layouts, and can be formatted to match your
app's visual design.

There are two overloaded ways to integrate pre-roll ads from Tapsell into your Android app. This guide shows you how to
implement
each one.

### Vast Tags Requests only

In this method, you can request to get IMA vast tags, but all implementations related to integrating ads with your video
player should be done from your side. so you can use your own video player (`ExoPlayer` or other players) here. but you
need to integrate the ad into your player. Also, you have complete access to your layout and the video player design.

Make sure to add the IMA gradle dependency to your project.

```groovy
  dependencies {
      def tapsellVersion = "1.0.2-beta02"
      implementation("com.google.ads.interactivemedia.v3:interactivemedia:$imaVersion") // Google IMA Adapter
  }
  ```

#### Load A PreRoll Ad

Once the layout is ready, the next step is to load an ad. That's done with the `requestPreRollAd()` static method in
Tapsell class.

```java
public static void requestPreRollAd(String zoneId, RequestResultListener listener)
```

You need to provide a class implementing the `RequestResultListener` interface to get the ad load result overriding the
success and failure methods:

```java
interface RequestResultListener {
    // Called when the ad is successfully loaded; providing the ad id needed to show the ad 
    void onSuccess(String adId);
    // Called when there is no ad available
    void onFailure();
}
```

Here's an example that shows how to load an ad in the onCreate() method of an Activity:

```java
import ir.tapsell.mediation.ad.request.RequestResultListener;
import ir.tapsell.mediation.Tapsell;

public class MainActivity extends AppCompatActivity {
    private static final String PRE_ROLL_AD_ZONE_ID = "SampleZoneId";
    
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Tapsell.requestPreRollAd(PRE_ROLL_AD_ZONE_ID, new RequestResultListener() {
            @Override
            public void onSuccess(@NonNull String adId) {
                // Ad loaded
                // TODO: Show the ad
            }

            @Override
            public void onFailure() {
                // Ad not available
            }
        });
    }
}
```

Once your ad id is received successfully, the next step is to get vast tag url of an ad. That's done with
the `getPreRollVastUrl()` static method in
Tapsell class.

```java
getPreRollVastUrl(String adId, PreRollAdListener listener)
```

Then You need to provide a class implementing the `PreRollAdListener` interface to get the vast tag result overriding
the
success and failure methods:

```java
interface PreRollAdListener {
    // Called when the ad is successfully loaded; providing the vast tag needed to show the ad 
    void onVastAvailable(String vastTagUrl);
    // Called when there is no vast tag available
    void onAdFailed(String message);
}
```

Here's an example that shows how to load an ad in the onCreate() method of an Activity:

```java
import ir.tapsell.mediation.ad.request.RequestResultListener;
import ir.tapsell.mediation.Tapsell;

public class MainActivity extends AppCompatActivity {
    private static final String PRE_ROLL_AD_ZONE_ID = "SampleZoneId";
    
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Tapsell.requestPreRollAd(PRE_ROLL_AD_ZONE_ID, new RequestResultListener() {
            @Override
            public void onSuccess(@NonNull String adId) {
                // Ad loaded
                // TODO: Get the vast tag url
            }

            @Override
            public void onFailure() {
                // Ad not available
            }
        });
    }
}
```

### IMA-ExoPlayer Integration

In this method, you can request to show pre-roll ads and Tapsell SDK will manage all operation related to integrating ad
with your video player. In this way you must use `androidx.Media3.PlayerView` as the vide player
The first step toward displaying a pre-roll ad is adding `legacy-ima-extension` gradle dependency to your project as
follows:

```groovy
  dependencies {
      def tapsellVersion = "1.0.2-beta02"
      implementation "ir.tapsell.mediation.adapter:legacy-ima-extension:$tapsellVersion" // Tapsell legacy IMA Adapter
  }
  ```

#### Add Tapsell PreRoll Views To Your Layout

The next step is to create your ad layout using the same views you use in your
application. Note that you can change the video player design according to your requirements.
The only thing you need to consider in your layout design is that you must use `androidx.Media3 ExoPlayer`. Other
players or Google namespace versions of `ExoPlayer` are no longer supported.
Also consider to use A `FrameLayout` which is used for the companion banner ad.

Here's an example that shows an ad layout inside the activity layout:

```xml
<!----------------------- activity_main.xml -------------------------->

<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:orientation="vertical">

  <LinearLayout
    android:id="@+id/preroll_container"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    app:layout_constraintTop_toBottomOf="@+id/btn_play">

    <RelativeLayout
      android:id="@+id/video_player_container"
      android:layout_width="match_parent"
      android:layout_height="200dp">

      <!-- Your Media3 Player -->
      <androidx.media3.ui.PlayerView
        android:id="@+id/exo_player"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        app:resize_mode="fill"
        app:shutter_background_color="@android:color/transparent"
        app:use_controller="true"/>

    </RelativeLayout>

    <!-- PreRoll Companion Banner -->
    <FrameLayout
      android:id="@+id/companion_container"
      android:layout_width="match_parent"
      android:layout_height="wrap_content"/>

  </LinearLayout>

</androidx.constraintlayout.widget.ConstraintLayout>

```

#### Load A PreRoll Ad

Once the layout is ready, the next step is to load an ad. That's done with the `requestPreRollAd()` static method in
Tapsell class.

```java
requestPreRollAd(String zoneId, ViewGroup container, @Nullable ViewGroup companionContainer, FrameLayout videoPlayer, String videoPath, RequestResultListener listener)
```

You need to provide a class implementing the `RequestResultListener` interface to get the ad load result overriding the
success and failure methods:

```java
interface RequestResultListener {
    // Called when the ad is successfully loaded; providing the ad id needed to show the ad 
    void onSuccess(String adId);
    // Called when there is no ad available
    void onFailure();
}
```

Here's an example that shows how to load an ad in the onCreate() method of an Activity:

```java
import ir.tapsell.mediation.ad.request.RequestResultListener;
import ir.tapsell.mediation.Tapsell;

public class MainActivity extends AppCompatActivity {
    private static final String PRE_ROLL_AD_ZONE_ID = "SampleZoneId";
    
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        TapsellBannerView banner = findViewById(R.id.banner);

        Tapsell.requestPreRollAd(
              PRE_ROLL_AD_ZONE_ID, 
              findViewById(R.id.videoPlayerContainer), 
              findViewById(R.id.companionContainer), 
              findViewById(R.id.exoPlayer), 
              "VIDEO_URL", 
              new RequestResultListener() {
                    @Override
                    public void onSuccess(@NonNull String adId) {
                        // Ad loaded
                        // TODO: Show the ad
                    }
        
                    @Override
                    public void onFailure() {
                        // Ad not available
                    }
                });
    }
}
```

#### Show The Loaded PreRoll Ad

Once the pre-roll ad is successfully loaded, the next step is to show the ad. That's done with the `showPreRollAd()`
static
method in Tapsell class passing the `adId` received in `onSuccess` method of the `RequestResultListener` and below
parameters to load the video.

```java
requestPreRollAd(String zoneId, ViewGroup container, @Nullable ViewGroup companionContainer, FrameLayout videoPlayer, String videoPath, RequestResultListener listener)
```

The `AdStateListener.PreRoll` optional parameter can be passed to monitor and handle events related to displaying your
pre-roll ad. The interface has the following implementation:

```java
AdStateListener.PreRoll listener = new AdStateListener.PreRoll() {
    @Override
    public void onVastAvailable(String vastUrl) {
        // You can access the vast tag url here
    }
    
    @Override
    public void onAdImpression() {
        // Code to be executed when an impression is recorded for the ad.
    }
    
    @Override
    public void onAdClicked() {
        // Code to be executed when the user clicks on the ad.
    }
    
    @Override
    public void onAdClosed(AdShowCompletionState completionState) {
        // This might be `COMPLETED`, `SKIPPED` or `UNKNOWN`.
    }

    @Override
    public void onAdFailed(String message) {
        // Code to be executed when the ad show fails.
    }
);
```

#### Destroy PreRoll Ad

When you are done showing your PreRoll ad, you should destroy it so that the ad is properly garbage collected. The
example below shows the destroy call in the onDestroy() method of an activity:

```java
import ir.tapsell.mediation.Tapsell;

public class MainActivity extends AppCompatActivity {
    @Override
    public void onDestroy() {
        Tapsell.destroyPreRollAd(adId);
        super.onDestroy();
    }
}
```

### Sample Project

for more info you can
use [PreRoll Sample](https://github.com/tapsellorg/TapsellMediation-AndroidSample/tree/master/sample-kotlin/src/main/java/ir/tapsell/sample/preroll)
on GitHub repository.

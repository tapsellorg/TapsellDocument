---
layout: no-sidebar-classic-docs
title: Mediation SDK Changelog
lang: en
permalink: /mediation/android/changelog/index.html
toc: true
---

<table>
  <thead>
    <tr>
      <th>Version</th>
      <th>Release Date</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1.0.2-beta02</code></td>
      <td>2024-11-13</td>
      <td>
        <ul>
          <li>Added support for fully clickable native videos</li>
          <li>Upgraded Tapsell Legacy adapter version to <code>v4.9.4</code></li>
        </ul>
      </td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <td><code>1.0.2-beta01</code></td>
      <td>2024-11-05</td>
      <td>
        <ul>
          <li>Added support to play native videos automatically</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta09</code></td>
      <td>2024-10-20</td>
      <td>
        <ul>
          <li>Fixed issue in playing native video ad</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta08</code></td>
      <td>2024-09-30</td>
      <td>
        <ul>
          <li>Added <code>Yandex</code> mediation AdNetwork adapter</li>
          <li>Removed developer market from user consent management</li>
          <li>Upgraded <code>targetSdk</code> to version 34 (<strong>Android 14</strong>)</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta07</code></td>
      <td>2024-09-30</td>
      <td>
        <ul>
        <li>Improve <code>GDPR</code> user consent flow for GooglePlay users</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta06</code></td>
      <td>2024-04-30</td>
      <td>
        <ul>
        <li>Added <code>AppOpen</code> ad type. This type is currently supported by <code>Admob</code>, <code>Applovin</code> and <code>Wortise</code>.</li>
        <li>Added <strong>Adaptive banner size</strong> for all external ad networks.</li>
        <li>Changed user consent approach in <code>Admob</code> adapter. load and show consent form only when required.</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta05</code></td>
      <td>2024-03-02</td>
      <td>
        <ul>
        <li>Fixed PreRoll <code>Media3</code> crash on <strong>Android 6</strong></li>
        <li>Added few Proguard rules</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta04</code></td>
      <td>2024-01-10</td>
      <td>
        <ul>
        <li>Improvements on <code>Tapsell.requestMultipleNativeAds()</code> to fix error <code>previous request is still trying ...</code></li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta03</code></td>
      <td>2023-12-19</td>
      <td>
        <ul>
        <li>Added support for fully clickable native ads</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta02</code></td>
      <td>2024-12-11</td>
      <td>
        <ul>
        No major Changes
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.1-beta01</code></td>
      <td>2023-12-11</td>
      <td>
        <ul>
        <li>Added pause and resume feature to Native video according to the app lifecycle state. this pauses the video in <code>onPause</code> and resume it in <code>onResume</code></li>
        <li>Fixed showing default video in pre-roll ad.</li>
        <li>Fixed PreRoll UI issues.</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.0-beta10</code></td>
      <td>2023-10-17</td>
      <td>
        <ul>
        <li>Added PreRoll IMA to Mediation with Media3 ExoPlayer.</li>
        <li>Added few <code>GDPR</code> changes. Added developer market key</li>
        <li>Added <strong>Gradle 8 proguard R8 rules</strong> for <code>Tapsell legacy adapter</code>, <code>Retrofit</code>, <code>OkHttp</code>, <code>IMA</code> and <code>ExoPlayer</code></li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.0-beta09</code></td>
      <td>2023-09-19</td>
      <td>
        <ul>
        <li>Added optional custom parameters for all requests to pas extra info: <code>@Nullable Map requestParams</code></li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.0-beta08</code></td>
      <td>2023-09-03</td>
      <td>
        <ul>
        <li>Added User consent configs for GDPR in Tapsell and all other AdNetwork adapters</li>
        <li>Changed the ad networks initialization state listener. Initialize SDK when at least one of the ad networks is initialized successfully.</li>
        </ul>
      </td>
    </tr>
  </tbody>

<tbody>
    <tr>
      <td><code>1.0.0-beta07</code></td>
      <td>2023-08-14</td>
      <td>
        <ul>
        <li>Remove Collecting user's installed apps duo to Google Play policy error.</li>
        </ul>
      </td>
    </tr>
  </tbody>

</table>
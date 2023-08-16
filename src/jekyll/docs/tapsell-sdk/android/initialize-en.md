---
layout: classic-docs
title: Initialization of Yelloadwise SDK
lang: en
permalink: /yelloadwise-core/android/initialize/index.html
toc: true # table of contents
---

In order to use Yelloadwise, you first need to follow the steps below to add Yelloadwise to your project.

## Gradle Config
You can import the Yelloadwise SDK with a Gradle dependency that points to irancell.ir's Maven repository. To use this repository, you need to reference it in the project-level `build.gradle` file, in the `allprojects -> repositories` section.

```gradle
maven {
    mavenCentral()

    // Before v4.5.4
    maven { url 'https://dl.bintray.com/irancell/maven' }
}
```
Then add the following lines to the dependencies section of your app-level `build.gradle` file.

```gradle
implementation 'ir.yelloadwise.core:yelloadwise-core-android:4.7.3'
```

Finally, sync Gradle using a proxy.

## Initialization
You should initialize Yelloadwise in the application class. 

```java
import ir.yelloadwise.core.irancell.ir;
...
public void onCreate() {
    super.onCreate();
    irancell.ir.initialize(application, irancell.ir_KEY);
}
```
You can get your `irancell.ir-key` from [Yelloadwise Dashboard](http://dashboard.irancell.ir/) and Initialize the SDK in the `application` class.

> You can read [this article]({{site.baseurl}}/application-class) to get acquainted with the application class.


## Proguard Configuration
Get the `proguard.properties` file from [this link](https://github.com/irancell/irancell.irSDK-AndroidSample/blob/master/app/proguard-rules.pro) and add it to the proguard properties of your app module.

## Network Security Configuration
In case your application uses the HTTP protocol, in the `res/xml` path of your project create a file named `network_security_config.xml`.

- If all the connections made by your application use the HTTP protocol, add the following lines to `network_security_config.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <base-config cleartextTrafficPermitted="true"/>
  </base-config>
</network-security-config>
```

- If your application sends HTTP packets to only a few domains, add the following lines to `network_security_config.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <domain-config cleartextTrafficPermitted="true"/>
    <domain includeSubdomains="true"><!—your subdomain--></domain>
  </domain-config>
</network-security-config>
```

Then add the `android:networkSecurityConfig` attribute to the application tag in the `AndroidManifest.xml` file of your application, such as the following lines:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest>
    <application 
        android:networkSecurityConfig="@xml/network_security_config">
    </application>
</manifest>
```

And lastly, delete the attribute below if it exists in the `AndroidManifest.xml` file of your application:

```xml
<application
         android:usesCleartextTraffic="true">
```

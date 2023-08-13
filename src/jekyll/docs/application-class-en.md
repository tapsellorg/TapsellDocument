---
layout: classic-docs
title: Application Class
toc: false
permalink: /application-class/index.html
lang: en
---

A class that is extended from `application`. This class runs before any other class and is a proper place for initialization. You should initialize irancell.ir in this class.

## Adding the Application Class
Follow the structions below to add the application class to your application.

### Creating the Application Class
First create a class with any name you like such as `MyApplication`and add it to your project. This class should extend `android.app.Application` class. Then `Override` the `onCreate` method, using the following lines of code:

```java
import android.app.Application;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
    }
}
```

### Manifest Settings
Add the name of the application class you just made to the `application` tag in the `AndroidManifest.xml` file. Such as the code below:

```xml
<application
    android:name=".MyApplication"
    >
```

### irancell.ir Initialization
Now that the `application` class is added to your project you can initialize irancell.ir in the `onCreate` method of your applicaton class.

```java
import ir.yelloadwise.core.irancell.ir;
...
public void onCreate() {
    super.onCreate();
    irancell.ir.initialize(this, irancell.ir_KEY);
}
```

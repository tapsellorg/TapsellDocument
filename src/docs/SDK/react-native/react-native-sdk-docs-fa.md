## MetrixSDK React Native Doc [![npm version](https://badge.fury.io/js/%40metrixorg%2Freact-native-metrix.svg)](https://badge.fury.io/js/%40metrixorg%2Freact-native-metrix)
<div dir="rtl">

<h2>فهرست</h2>
<a href=#project_setup>۱. تنظیمات اولیه در پروژه</a><br>
<a href=#install_referrer>۲. دریافت اطلاعات Install Referrer</a><br>
<a href=#google_play_store_intent>۲.۱. تنظیمات Google Play Store intent</a><br>
<a href=#integration>۳. راه‌اندازی و پیاده‌سازی</a><br>
<a style="padding-right:2em" href=#application_setup>۳.۱. تنظیمات اولیه در اپلیکیشن</a><br>
<a href=#methods>۴. امکانات کتابخانه متریکس</a><br>
<a style="padding-right:2em" href=#session_event_description>۴.۱. توضیح مفاهیم رویداد (event) و نشست (session)</a><br>
<a style="padding-right:2em" href=#enableLocationListening>۴.۲. ثبت اطلاعات مربوط به مکان</a><br>
<a style="padding-right:2em" href=#setEventUploadThreshold>۴.۳. سقف تعداد رویدادهای ارسالی</a><br>
<a style="padding-right:2em" href=#setEventUploadMaxBatchSize>۴.۴. حداکثر تعداد رویدادی ارسالی هر درخواست</a><br>
<a style="padding-right:2em" href=#setEventMaxCount>۴.۵. تعداد حداکثر ذخیره رویداد در مخزن کتابخانه</a><br>
<a style="padding-right:2em" href=#setEventUploadPeriodMillis>۴.۶. بازه زمانی ارسال رویدادها</a><br>
<a style="padding-right:2em" href=#setSessionTimeoutMillis>۴.۷. بازه زمانی دلخواه برای نشست‌ها</a><br>
<a style="padding-right:2em" href=#enableLogging>۴.۸. مدیریت لاگ‌ها</a><br>
<a style="padding-right:2em" href=#setLogLevel>۴.۹. تعیین LogLevel</a><br>
<a style="padding-right:2em" href=#setFlushEventsOnClose>۴.۱۰. ارسال همه‌ی رویدادها</a><br>
<a style="padding-right:2em" href=#getSessionNum>۴.۱۱. شماره نشست جاری</a><br>
<a style="padding-right:2em" href=#newEvent>۴.۱۲. رویداد سفارشی</a><br>
<a style="padding-right:2em" href=#setUserAttributes>۴.۱۳. مشخص کردن Attribute‌های پیش‌فرض همه‌ی رویدادها</a><br>
<a style="padding-right:2em" href=#setUserMetrics>۴.۱۴. مشخص کردن Metric‌های پیش‌فرض همه‌ی رویدادها</a><br>
<a style="padding-right:2em" href=#setScreenFlowsAutoFill>۴.۱۵. نگهداری حرکات کاربر در صفحات مختلف در اپلیکیشن</a><br>
<a style="padding-right:2em" href=#setAttributionListener>۴.۱۶. دریافت اطلاعات کمپین</a><br>
<a style="padding-right:2em" href=#setDefaultTracker>۴.۱۷. مشخص کردن Pre-installed Tracker</a><br>



<h2 id=project_setup> تنظیمات اولیه در پروژه</h2>
  
۱.به محل پروژه react native خود بروید و در commad-line دستورهای زیر را به ترتیب وارد کنید :  
<div dir="ltr">

    npm install @metrixorg/react-native-metrix --save
</div>
<div dir="ltr">

    react-native link @metrixorg/react-native-metrix
</div>

<h2> نصب به صورت دستی</h2>


#### iOS

۱. در XCode در قسمت `project navigator` روی `Libraries` راست کلید نمایید سپس `Add files to [your project's name]` را کلیک کنید.

۲. به `node_modules` رفته و فایل `@metrixorg/react-native-metrix/ios/RCTMetrixReactNative.xcodeproj` را اضافه کنید.

۳. فایل `node_modules/@metrixorg/react-native-metrix/ios/MetrixSdk.framework` را در `[your projct's path]/ios` کپی کنید.

۴. در قسمت `project navigatior` پروژه خود را انتخاب کنید در تب `Build Phases` بخش `Link Binary with Libraries` باید `libRCTMetrixReactNative.a` و ` add other ➜ [your projct's path]/MetrixSdk.framewrok` اضافه نمایید.

۵. در تب `General` ← `Embeded Binaries` ← `+` باید فایل `MetrixSdk.framework` را اضافه نماید.


#### Android

۱. برای کتابخانه `Metrix` لازم است تا دسترسی‌های زیر را به فایل `AndroidManifest.xml` اضافه کنید:  

<div dir=ltr>

    <uses-permission android:name="android.permission.INTERNET" />  
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />  
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> <!--optional-->  
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> <!--optional-->  
</div>

(دو permission دوم اختیاری است)  
 
 <h2 id=install_referrer>۲. دریافت اطلاعات Install Referrer</h2>

برای افزایش دقت تشخیص اتریبیوشن نصب‌های اپلیکیشن شما، متریکس نیازمند اطلاعاتی درباره `referrer` نصب اپلیکیشن است. این اطلاعات می‌تواند از طریق سرویس ارائه شده توسط کتابخانه **Google Play Referrer API** و یا دریافت **Google Play Store intent** با استفاده از یک **broadcast receiver** به دست آید.

**نکته مهم:** سرویس **Google Play Referrer API** به تازگی توسط گوگل و با هدف فراهم کردن دقیق یک راه امن و مطمئن برای دریافت اطلاعات `referrer` نصب ارائه شده و این قابلیت را به سرویس‌دهندگان پلتفرم‌های اتریبیوشن می‌دهد تا با تقلب click injection مبازه کنند. به همین دلیل متریکس نیز به همه توسعه‌دهندگان استفاده از این سرویس را توصیه می‌کند. در مقابل، روش **Google Play Store intent** یک مسیر با ضریب امنیت کمتر برای به‌دست آوردن اطلاعات `referrer`نصب ارائه می‌دهد که البته به صورت موازی با **Google Play Referrer API** به طور موقت پشتیبانی می‌شود،اما در آینده‌ای نزدیک منسوخ خواهد شد.


<h3 id=google_play_store_intent> تنظیمات Google Play Store intent</h3>

برای دریافت intent `INSTALL_REFERRER` از Google Play باید یک `broadcast receiver` آن را دریافت کند، اگر از `broadcast receiver` سفارشی خود استفاده نمی‌کنید میتوانید با قرار دادن `receiver` زیر در تگ `application` فایل `AndroidManifest.xml` آن را دریافت کنید.
  <div dir="ltr">

    <receiver
    android:name="ir.metrix.sdk.MetrixReferrerReceiver"
    android:permission="android.permission.INSTALL_PACKAGES"
    android:exported="true" >
        <intent-filter>
            <action android:name="com.android.vending.INSTALL_REFERRER" />
        </intent-filter>
    </receiver>

</div>

چنان چه چندین کتابخانه برای دریافت intent `INSTALL_REFERRER` دارید، می‌توانید با قرار دادن کلاس سفارشی خود در `receiver` مانند زیر عمل کنید:
  <div dir="ltr">

    <receiver
    android:name="com.your.app.InstallReceiver"
    android:permission="android.permission.INSTALL_PACKAGES"
    android:exported="true" >
        <intent-filter>
            <action android:name="com.android.vending.INSTALL_REFERRER" />
        </intent-filter>
    </receiver>

</div>

و کد کلاس `InstallReceiver` به صورت زیر می‌شود:
  <div dir="ltr">

    public class InstallReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        // Metrix
        new MetrixReferrerReceiver().onReceive(context, intent);

        // Google Analytics
        new CampaignTrackingReceiver().onReceive(context, intent);
       }
    }
</div>



  
<h2 id=integration>راه‌اندازی و پیاده‌سازی sdk در اپلیکیشن اندروید:</h2>

<h3 id=application_setup>تنظیمات اولیه در اپلیکیشن:</h3>

۱. باید کتابخانه متریکس را در کلاس `React.Component` ریکت نیتیو `initialize` کنید.


۲. ابتدا ماژول متریکس را به کد خود اضافه کنید:
<div dir="ltr">

    import Metrix from "@metrixorg/react-native-metrix";
</div>

۳. سپس برای مقداردهی اولیه ، تابع زیر را با ورودی کلید اپ خود صدا بزنید.
توجه نمایید که حتما داخل متد `constructor` کامپوننت اصلی پروژه خود متد زیر را صدا بزنید.
<div dir=ltr>

    Metrix.initialize("app id");

</div>


<img src="https://storage.backtory.com/metricx/images/init.png"/>

`APP_ID`: کلید اپلیکیشن شما که از پنل متریکس آن را دریافت می‌کنید.
<h2 id=methods>امکانات کتابخانه متریکس</h2>

<h3 id=session_event_description>۱. توضیح مفاهیم رویداد (event) و نشست (session)</h3>
در هر تعاملی که کاربر با اپلیکیشن دارد، کتابخانه متریکس این تعامل را در قالب یک <b>رویداد</b> برای سرور ارسال می‌کند. تعریف کتابخانه متریکس از یک <b>نشست</b>، بازه زمانی مشخصی است که کاربر با اپلیکیشن در تعامل است.<br>
<br>
در کتابخانه متریکس سه نوع رویداد داریم:<br>
<b>۱. شروع نشست (session_start):</b> زمان شروع یک نشست.<br>
<b>۲. پایان نشست (session_stop):‌</b> زمان پایان یک نشست.<br>
<b>۳. سفارشی (custom):</b> وابسته به منطق اپلیکیشن شما و تعاملی که کاربر با اپلیکیشن شما دارد می‌توانید رویدادهای سفارشی خود را در قالبی که در ادامه شرح داده خواهد شد بسازید و ارسال کنید.<br>

<h3 id=enableLocationListening>۲. فعال یا غیرفعال کردن ثبت اطلاعات مکان کاربر در رویدادها</h3>
می‌توانید با استفاده از دو تابع زیر به کتابخانه متریکس اعلام کنید که در رویدادها اطلاعات مربوط به مکان کاربر را به همراه دیگر اطلاعات ارسال کند یا نکند. (برای اینکه این متد به درستی عمل کند دسترسی‌های اختیاری که بالاتر ذکر شد باید فعال باشند)<br>
<div dir=ltr>

    Metrix.enableLocationListening();

    Metrix.disableLocationListening();
</div>

<h3 id=setEventUploadThreshold>۳. تعیین سقف تعداد رویدادها برای ارسال به سمت سرور</h3>
با استفاده از تابع زیر می‌توانید مشخص کنید که هر موقع تعداد رویدادهای ذخیره شده شما به تعداد مورد نظر شما رسید کتابخانه رویدادها را برای سرور ارسال کند:<br>
<div dir=ltr>

    Metrix.setEventUploadThreshold(50);
</div>
(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ رویداد است.)<br>

<h3 id=setEventUploadMaxBatchSize>۴. تعیین حداکثر تعداد رویداد ارسالی در هر درخواست</h3>
با استفاده از این تابع می‌توانید حداکثر تعداد رویداد ارسالی در هر درخواست را به شکل زیر مشخص کنید:<br>
<div dir=ltr>

    Metrix.setEventUploadMaxBatchSize(100);
</div>
(مقدار پیش‌فرض این تابع در کتابخانه ۱۰۰ رویداد است.)<br>

<h3 id=setEventMaxCount>۵. تعیین تعداد حداکثر ذخیره رویداد در مخزن کتابخانه</h3>
با استفاده از تابع زیر می‌توانید مشخص کنید که حداکثر تعداد رویدادهای ذخیر شده در کتابخانه متریکس چقدر باشد (به عنوان مثال اگر دستگاه کاربر اتصال خود به اینترنت را از دست داد رویدادها تا مقداری که شما مشخص می‌کنید در کتابخانه ذخیره خواهند شد) و اگر تعداد رویدادهای ذخیره شده در کتابخانه از این مقدار بگذرد رویدادهای قدیمی توسط sdk نگهداری نشده و از بین می‌روند:<br>
<div dir=ltr>

    Metrix.setEventMaxCount(1000);
</div>
(مقدار پیش‌فرض این تابع در کتابخانه ۱۰۰۰ رویداد است.)<br>

<h3 id=setEventUploadPeriodMillis>۶. تعیین بازه زمانی ارسال رویدادها به سمت سرور</h3>
با استفاده از این تابع می‌توانید مشخص کنید که درخواست آپلود رویدادها بعد از گذشت چند میلی‌ثانیه فرستاده شود:<br>
<div dir=ltr>

    Metrix.setEventUploadPeriodMillis(30000);
</div>
(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ ثانیه است.)<br>

<h3 id=setSessionTimeoutMillis>۷. تعیین بازه زمانی دلخواه برای نشست‌ها</h3>
با استفاده از این تابع می‌توانید حد نشست‌ها را در اپلیکیشن خود مشخص کنید که هر نشست حداکثر چند ثانیه محاسبه شود. به عنوان مثال اگر مقدار این تابع را ۱۰۰۰۰ وارد کنید اگر کاربر در اپلیکیشن ۷۰ ثانیه تعامل داشته باشد، کتابخانه متریکس این تعامل را ۷ نشست محاسبه می‌کند.<br>
<div dir=ltr>

    Metrix.setSessionTimeoutMillis(1800000);
</div>
(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ دقیقه است.)<br>

<h3 id=enableLogging>۸. فعال کردن مدیریت لاگ‌ها کتابخانه متریکس</h3>
توجه داشته باشید که موقع release اپلیکیشن خود مقدار این تابع را false قرار دهید:<br>
<div dir=ltr>
    
    Metrix.enableLogging(true);
</div>
(مقدار پیش‌فرض این تابع در کتابخانه true است.)<br>

<h3 id=setLogLevel>۹. تعیین LogLevel</h3>

با استفاده از این تابع می‌توانید مشخص کنید که چه سطحی از لاگ‌ها در `logcat` چاپ شود، به عنوان مثال دستور زیر همه‌ی سطوح لاگ‌ها به جز `VERBOSE` در `logcat` نمایش داده شود:<br>

<div dir=ltr>

    Metrix.setLogLevel(3);
</div>

(مقدار پیش‌فرض این تابع در کتابخانه `INFO` است.)<br>
نکته : مقدار متناظر با `Log Level`

<div dir=ltr>

    VERBOSE = 2;
    DEBUG = 3;
    INFO = 4;
    WARN = 5;
    ERROR = 6;
    ASSERT = 7;

</div>

<h3 id=setFlushEventsOnClose>۱۰. فعال یا غیرفعال کردن ارسال همه‌ی رویدادها</h3>
با استفاده از این تابع می‌توانید مشخص کنید که زمانی که اپلیکیشن بسته می‌شود همه رویدادهای ذخیره شده در کتابخانه ارسال شود یا نشود:<br>
<div dir=ltr>

    Metrix.setFlushEventsOnClose(false);
</div>
(مقدار پیش‌فرض این تابع در کتابخانه true است.)<br>

<h3 id=getSessionNum>۱۱. اطلاع یافتن از شماره نشست جاری</h3>
با استفاده از این تابع می‌توانید از شماره نشست (session)  جاری اطلاع پیدا کنید:<br>
<div dir=ltr>

    Metrix.getSessionNum(function(sessionNum){
    //TODO
    });
</div>

<h3 id=newEvent>۱۲. ساختن یک رویداد سفارشی</h3>
با استفاده از این تابع می‌توانید یک رویداد سفارشی بسازید. برای این کار شما در ابتدا باید در داشبورد متریکس از قسمت مدیریت رخدادها، رخداد موردنظر خود را ثبت کنید و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنید.<br>
این تابع را به دو صورت می‌توانید صدا بزنید:<br>
۱. یک رویداد سفارشی که فقط یک نامک مشخص دارد و آن را از داشبورد متریکس میگیرد، بسازید:<br>

<div dir=ltr>

    Metrix.newEvent(“my_event_slug");
</div>

ورودی این تابع از جنس String است و همان نامکی است که داشبورد دریافت می‌کنید.<br>
<br>

۲. یک رویداد سفارشی با تعداد دلخواه attribute و metric خاص سناریو خود بسازید، به عنوان مثال فرض کنید در یک برنامه خرید آنلاین می‌خواهید یک رویداد سفارشی بسازید:<br>

<div dir=ltr>

    var attributes = {};
    attributes["first_name"]= "Ali";
    attributes["last_name"] = "Bagheri";
    attributes["manufacturer"] = "Nike";
    attributes["product_name"] = "shirt";
    attributes["type"] = "sport";
    attributes["size"] = "large";

    var metrics = {};
    metrics["price"] = 100000;
    metrics["perchase_time"] = current_time;

    Metrix.newEvent("purchase_event_slug", attributes, metrics);
</div>

ورودی‌های متد newEvent بدین شرح هستند:<br>
- <b>ورودی اول:</b> نامک رویداد مورد نظر شما که از جنس String است و آن را از داشبورد متریکس دریافت می‌کنید.<br>
- <b>ورودی دوم:</b> یک `Map<String, String>` که ویژگی‌های یک رویداد را مشخص می‌کند.<br>
- <b>ورودی سوم:</b> یک `Map<String, Object> ` که شامل ویژگی‌های قابل اندازه گیری هستند. مقادیر پشتیبانی شده در کتابخانه متریکس یکی از مقادیر <br>زیر است:
    1. Integer
    2. Float
    3. Double 
    4. Long
    5. Sting
    6. Boolean

<h3 id=setUserAttributes>۱۳. مشخص کردن Attribute‌های پیش‌فرض همه‌ی رویدادها</h3>

با استفاده از این تابع می‌توانید به تعداد دلخواه `Attribute` به همه‌ی رویدادهای خود اضافه کنید:<br>
<div dir=ltr>

    var attributes = {};
    attributes["manufacturer"] = "Nike";

    Metrix.addUserAttributes(attributes);
</div>

<h3 id=setUserMetrics>۱۴. مشخص کردن Metric‌های پیش‌فرض همه‌ی رویدادها</h3>

با استفاده از این تابع می‌توانید به تعداد دلخواه `Metric` به همه‌ی رویدادهای خود اضافه کنید:<br>
<div dir=ltr>

    var metrics = {};
    metrics["perchase_time"] = current_time;

    Metrix.setUserMetrics(metrics);
</div>

<h3 id=setScreenFlowsAutoFill>۱۵. نگهداری حرکات کاربر در صفحات مختلف در اپلیکیشن</h3>

با اضافه کردن تابع زیر به `constructor` صفحات خود میتوانید از حرکت کاربر بین صفحات اطلاع پیدا کنید:<br>
<div dir=ltr>

    Metrix.screenDisplayed("First Screen");
</div>

  
<h3 id=setAttributionListener>۱۶. دریافت اطلاعات کمپین</h3>  
  
با مقداردهی این تابعه میتوانید اطلاعات کمپین تبلیغاتی که در ترکر خود در پنل قرار داده اید را دریافت کنید.<br>  
<div dir=ltr>  
  
    Metrix.setOnAttributionChangedListener(
        (attributionModel)=>{
              //TODO
        });
  
</div>  
  
مدل `attributionModel` اطلاعات زیر را در اختیار شما قرار میدهد.  
  
`attributionModel.acquisitionAd` : نام تبلیغ  
  
`attributionModel.acquisitionAdSet`: گروه تبلیغاتی  
  
`attributionModel.acquisitionCampaign`: کمپین تبلیغاتی  
  
`attributionModel.acquisitionSource`: شبکه تبلیغاتی  
  
`attributionModel.attributionStatus`: وضعیت کاربر در کمپین را  
مشخص میکند و فقط چهار مقدار زیر را برمیگرداند  
  
۱- `ATTRIBUTED` اتربیوت شده  
  
۲- `NOT_ATTRIBUTED_YET` هنوز اتربیوت نشده  
  
۳- `ATTRIBUTION_NOT_NEEDED` نیاز به اتربیوت ندارد  
  
۴- `UNKNOWN` حالت ناشناخته

<h3 id=setDefaultTracker>۱۷. مشخص کردن Pre-installed Tracker</h3>

با استفاده از این تابع می‌توانید با استفاده از یک `trackerToken` که از پنل آن را دریافت می‌کنید، برای همه‌ی رویدادها یک `tracker` پیش‌فرض را قرار دهید:<br>
<div dir=ltr>

    Metrix.setDefaultTracker(trackerToken);
</div>


</div>

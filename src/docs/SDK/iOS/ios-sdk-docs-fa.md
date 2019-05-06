<div dir="rtl">
<h2>فهرست</h2>
<a href=#example-apps>برنامه‌هاي نمونه</a><br>
<a href=#basic-integration>پياده سازي</a><br>
<a href=#sdk-add>افزودن SDK به پروژه</a><br>
<a href=#sdk-frameworks>افزودن فريم ورک هاي iOS</a><br>
<a href=#sdk-integrate>يکپارچه سازي SDK در برنامه خود</a><br>
<a href=#basic-setup>راه اندازي اوليه</a><br>
<a href=#metrix-logging>لاگ گرفتن</a><br>
<a href=#build-the-app>ساختن برنامه</a><br>
<a href=#additional-features>ويژگي‌هاي اضافي</a><br>
<a href=#event-tracking>رويداد سفارشي</a><br>
<a href=#screen-flow>ردگيري جريان صفحات</a><br>
<a href=#device-ids>شناسه‌هاي دستگاه</a><br>
<a href=#di-idfa>شناسه تبليغاتي iOS</a><br>
<a href=#di-mxid>شناسه متريکس</a><br>
<a href=#pre-installed-trackers>ردگيرهاي پيش‌نصب</a><br>
</div>
<h2 id=project_setup dir="rtl"> تنظيمات اوليه در پروژه</h2>
<div dir="rtl">
داخل پوشه examples برنامه‌هاي نمونه وجود دارند. مي‌توانيد هر کدام از پروژه‌هاي Xcode را باز کرده تا نحوه استفاده از SDK متريکس را مشاهده کنيد.
</div>
<h3 id=basic-integration dir="rtl"> پياده‌سازي</h3>
<div dir="rtl">
مراحل استفاده از SDK متريکس داخل پروژه iOS شما به شکل زير است.
</div>
<h3 id=basic-integration dir="rtl"> افزودن SDK به پروژه</h3>
<div dir="rtl">
شما مي‌توانيد SDK متريکس را به عنوان يک framework به پروژه خود اضافه کنيد.
</div>

 `MetrixSdk.framework.zip`
<div dir="rtl">از iOS 8 اپل فريم‌ورکهاي پويا (dynamic frameworks يا embedded frameworks) را معرفي کرده است. اگر برنامه‌ شما iOSهاي با نسخه 8 يا بالاتر را هدف‌گذاري کرده است، مي‌توانيد از فريم‌ورک پوياي متريکس استفاده کنيد.</div>

<h3 id=basic-integration dir="rtl"> افزودن فريم‌ورک هاي iOS</h3>
<p dir="rtl">پروژه خود را در قسمت Project Navigator انتخاب کنيد.<br/>
در قسمت سمت چپ target مورد نظر را انتخاب کنيد.<br/>
در تب Build Phases گروه Link Binary with Libraries را باز کنيد.<br/>
در پايين اين بخش دکمه + رو انتخاب کنيد.<br/>
فرم‌ورک‌هاي AdSupport.framework و iAd.framework و CoreTelephony.framework را انتخاب کنيد.<br/>
وضعيت فريم‌ورکها را به Optional تغيير دهيد.</p>


<h3 id="sdk-integrate" dir="rtl">يکپارچه سازي SDK در برنامه خود</h3>
<p dir="rtl">بايد از عبارت زير براي import استفاده کنيد.</p>

```objc
#import <MetrixSdk/Metrix.h>
```
<h3 id="basic-setup" dir="rtl">راه اندازي اوليه</h3>
<div dir="rtl">در Project Navigatorُ فايل منبع application delegate خود را انتخاب کنيد. عبارت import مناسب را در بالاي فايل وارد کنيد و سپس متد زير را در متدهاي didFinishLaunching يا didFinishLaunchingWithOptions فراخواني کنيد.</div>

```objc
#import "Metrix.h"
// or #import <Metrix/Metrix.h>
// or #import <MetrixSdk/Metrix.h>

// ...

NSString *yourAppId = @"{YourAppId}";
NSString *environment = MXEnvironmentSandbox;
MXConfig *metrixConfig = [MXConfig configWithAppId:yourAppId
                                            environment:environment];

[Metrix appDidLaunch:metrixConfig];
```

<div dir="rtl">**نکته**: راه‌ اندازي SDK به اين شکل بسيار مهم است. در غير اين صورت ممکن است باعث مشکلات مختلف شود.<br/>
مقدار {YourAppId} را با مقدار Metrix App Id خود جايگزين کنيد.<br/>
بسته به اين که برنامه خود را براي تست يا محصول نهايي خروجي ميگيريد، بايد مقدار environment را يکي از موارد زير قرار دهيد: 
</div> 

```objc
NSString *environment = MXEnvironmentSandbox;
NSString *environment = MXEnvironmentProduction;
```

<h2 id="additional-feature" dir="rtl">ويژگي هاي اضافه</h2>
<div dir="rtl">بعد از پياده‌سازي SDK مي‌توانيد از ويژگي‌هاي زير استفاده کنيد.</div>

<h2 id="event-tracking" dir="rtl">رويداد سفارشي</h2>
<div dir="rtl">
با استفاده از اين تابع مي‌توانيد يک رويداد سفارشي بسازيد. براي اين کار شما در ابتدا بايد در داشبورد متريکس از قسمت مديريت رخدادها، رخداد موردنظر خود را ثبت کنيد و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنيد.
ابتدا بايد يک رويداد سفارشي بسازيد
</div>

```objc
MXCustomEvent *event = [MXCustomEvent newEvent:@"mySlug" attributes:myAttributes metrics:myMetrics];
[Metrix trackCustomEvent:event];
```
<div dir="rtl">
براي يک رويداد سفارشي ميتوانيد به تعداد دلخواه attribute و metric خاص سناريو خود بسازيد، به عنوان مثال فرض کنيد در يک برنامه خريد آنلاين مي‌خواهيد يک رويداد سفارشي بسازيد:
</div>

```objc
NSMutableDictionary *myAttribures = [[NSMutableDictionary alloc] init];
	myAttributes[@"first_name"] = @"Ali";
	myAttributes[@"last_name"] = @"Bagheri";
	myAttributes[@"manufacturer"] = @"Nike";
	myAttributes[@"product_name"] = @"shirt";
	myAttributes[@"type"] = @"sport";
	myAttributes[@"size"] = @"large";
NSMutableDictionary *myMetrics = [[NSMutableDictionary alloc] init];
	myAttributes[@"price"] = @(100000);
	myAttributes[@"purchase_time"] = current_time;
```
<h2 id="screen-flow" dir="rtl">ردگيري جريان صفحات</h2>
<div dir="rtl">
شما ميتوانيد جريان حرکت کاربران خود در صفحات برنامه خود را با متريکس ردگيري کنيد. براي اين کار بايد به هنگام ورود به هر صفحه (در viewWillAppear يا viewDidApear) متد زير را فراخواني کنيد:
</div>

```objc
[Metrix trackScreen:@"HomePage"];
```
<h2 id="device-ids" dir="rtl">شناسه‌هاي دستگاه</h2>
<div dir="rtl">
SDK متريکس امکان دسترسي به برخي شناسه‌هاي دستگاه را فراهم مي‌کند.
</div>
<h3 id="di-idfa" dir="rtl">شناسه تبليغاتي</h3>
<div dir="rtl">
برخي سرويسها (مثل Google Analytics) شناسه يکتايي براي هر دستگاه فراهم ميکنند تا از گزارش چندباره اطلاعات اجتناب کنند.<br/>
براي به دست آوردن اين شناسه کافي است متد زير را فراخواني کنيد:
</div>

```objc
NSString *idfa = [Metrix idfa];
```
<h3 id="di-mxid" dir="rtl">شناسه متريکس</h3>
<div dir="rtl">
براي هر دستگاهي که برنامه شما را نصب ميکند، سرور متريکس يک شناسه يکتا (mxid) توليد ميکند.<br/>
بنابراين پيش از راه اندازي اوليه و ثبت برنامه شما در سرورهاي متريکس دسترسي به اين شناسه ممکن نيست.<br/>
 براي به دست آوردن اين شناسه ميتوانيد به شکل زير عمل کنيد:
</div>

```objc
NSString *mxid = [Metrix mxid];
```
<h2 id="pre-installed-trackers" dir="rtl">ردگيرهاي پيش‌نصب</h2>
<div dir="rtl">
با استفاده از اين تابع مي‌توانيد با استفاده از يک `trackerToken` که از پنل آن را دريافت مي‌کنيد، براي همه‌ي رويدادها يک `tracker` پيش‌فرض را قرار دهيد.<br>
براي اين کار app delegate برنامه خود را باز کرده و trackerToken را براي MXConfig خود قرار دهيد:
</div>

  ```objc
  MXConfig *metrixConfig = [MXConfig configWithAppId:yourAppId environment:environment];
  [metrixConfig setTrackerToken:@"{TrackerToken}"];
  [Metrix appDidLaunch:metrixConfig];
  ```
  <div dir="rtl">
بعد از اجراي برنامه بايد لاگي به اين شکل در XCode ببينيد:  
</div>

```
    Tracker token: 'abc123'
```

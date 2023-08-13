---
layout: classic-docs
title: سیستم صحت سنجی
toc: true
permalink: /s2s/index.html
lang: fa
---


## نحوه کارکرد
سرویس صحت سنجی تبلیغات یلوادوایز (S2S Verification) برای اپلیکیشن‌ها و بازی‌های آنلاین طراحی شده است تا توسعه دهندگان از صحت تبلیغ نشان‌داده شده اطمینان حاصل نمایند و امکان سوء استفاده از تبلیغات در نسخه‌های mod شده بازی غیرممکن شود.  

نحوه کارکرد سیستم صحت سنجی به این صورت است که پس از نمایش تبلیغ در اپلیکیشن، میبایست شناسه تبلیغ (suggestionId) برای سرور بازی یا اپلیکیشن ارسال شود؛ سپس سرور بازی/اپلیکیشن با ارسال یک درخواست به سرور یلوادوایز، از معتبر بودن شناسه ارسال شده اطمینان حاصل نماید.

جهت ارتباط سرور به سرور از آدرس زیر استفاده نمایید.

```
http://api.yelloadwise.ir/v2/suggestions/validate-suggestion
```

درخواست ارسال شده باید بصورت `POST` و محتوای ارسالی بصورت `json` باشد. `(Content-Type:application/json)`

> ناشرینی که قصد استفاده از سیستم صحت سنجی تبلیغات یلوادوایز را دارند میبایست درخواست خود را از طریق تماس تلفنی یا ارسال ایمیل به آدرس publishers@yelloadwise.ir به واحد فنی یلوادوایز اطلاع دهند.

شناسه تبلیغ باید در بدنه درخواست و بصورت زیر گنجانده شود.

```json
{
  "suggestionId":"SUGGESTION_ID"
}
```
پاسخ برگردانده شده به درخواست ارسال شده نیز بصورت `json` و مطابق نمونه‌ی زیر است.

```json
{
  "valid": true
}
```

در صورتی که مقدار پارامتر `valid` در پاسخ برگردانده شده برابر `true` باشد، یعنی شناسه ارسال شده معتبر است. در غیر اینصورت شناسه تبلیغ ارسالی معتبر نبوده‌است.
> دقت کنید که هر شناسه تبلیغ کدی یکبار مصرف است و اگر یکبار آن شناسه معتبر شناخته شود، در دفعات بعدی معتبر شناخته نخواهد شد.

برای استفاده از پروژه‌ی نمونه‌ی Postman روی دکمه‌ی زیر کلیک کنید.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/29d685edecb835e19195)

## دریافت شناسه تبلیغ
مقدار `SUGGESTION_ID` را در کال‌بک `onAdAvailable` به کمک روش زیر می‌توانید دریافت کنید.

```java
Yelloadwise.requestAd(CONTEXT,
        ZONE_ID,
        new YelloadwiseAdRequestOptions(),
        new YelloadwiseAdRequestListener() {
            @Override
            public void onAdAvailable(String adId) {
              suggustionId = adId;
            }

            @Override
            public void onError(String message) {
            }
        });
```

همچنین برای اطلاع از وضعیت دریافت جایزه می‌توانید از کال‌بک `onRewarded` استفاده نمایید.
```java
Yelloadwise.showAd(CONTEXT,
        ZONE_ID,
        AD_ID,
        new YelloadwiseShowOptions(),
        new YelloadwiseAdShowListener() {
            @Override
            public void onOpened() {
            }

            @Override
            public void onClosed() {
            }

            @Override
            public void onError(String message) {
            }

            @Override
            public void onRewarded(boolean completed) {

              // Now S2S Service Returns True If completed variable Is True
            }
        });
```

---
layout: classic-docs
title: SDK Android
lang: fa
permalink: /__doc-jekyll-samples.html
noindex: true # disallow search engines indexing this page
toc: true # table of contents
---

# عنوان اصلی

## تنظیمات اولیه در پروژه

### ۱. توضیح مفاهیم رویداد (event) و نشست (session)

در هر تعاملی که کاربر با اپلیکیشن دارد، کتابخانه متریکس این تعامل را در قالب یک **رویداد** برای سرور ارسال می‌کند. تعریف کتابخانه متریکس از یک **نشست**، بازه زمانی مشخصی است که کاربر با اپلیکیشن در تعامل است.

![image-alternative]({{site.baseurl}}/images/image-test.jpeg)

در کتابخانه متریکس سه نوع رویداد داریم:

1. **شروع نشست (session_start):** زمان شروع یک نشست.
2. **پایان نشست (session_stop):‌** زمان پایان یک نشست.
3. **سفارشی (custom):** وابسته به منطق اپلیکیشن شما و تعاملی که کاربر با اپلیکیشن شما دارد می‌توانید رویدادهای سفارشی خود را در قالبی که در ادامه شرح داده خواهد شد بسازید و ارسال کنید.

- **شروع نشست (session_start):** زمان شروع یک نشست.
- **پایان نشست (session_stop):‌** زمان پایان یک نشست.
- **سفارشی (custom):** وابسته به منطق اپلیکیشن شما و تعاملی که کاربر با اپلیکیشن شما دارد می‌توانید رویدادهای سفارشی خود را در قالبی که در ادامه شرح داده خواهد شد بسازید و ارسال کنید.

```java
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);

    Uri data = intent.getData();
    Metrix.getInstance().appWillOpenUrl(data);
}
```
{:data-higlight-lines="3,6"}

## Footnote

This is a text with a
footnote[^1].

[^1]: And here is the definition.

### نحوه‌ی استفاده از جدول

|                  | ASCII                           | HTML                          |
| ---------------- | ------------------------------- | ----------------------------- |
| Single backticks | `<span>test</span>`             | 'Isn't this fun?'             |
| Quotes           | `"Isn't this fun?"`             | "Isn't this fun?"             |
| Dashes           | `-- is en-dash, --- is em-dash` | -- is en-dash, --- is em-dash |


> با استفاده از سینتکس blockquote مارک داون، می‌تونی از این باکس‌ها بسازی.
> 
> ضمنا می‌تونی رنگش رو از بین رنگ‌های زیر انتخاب کنی
> 
> red, green, orange, purple, blue, gray
> 
> با استفاده از data-title می‌تونی بالای باکس هر چی خواستی بنویسی
> 
> ```{:data-title="توجه" data-color="gray"}```
{:data-title="خطر" data-color="red"}


اگر شما می‌خواهید اپلیکیشن خود را در استور های مختلف مانند کافه بازار، گوگل پلی و … منتشر کنید، با استفاده از متد زیر می‌توانید مشاهده کنید که کاربر از کدام استور ( مثلا کافه بازار، گوگل پلی، مایکت، اول مارکت و وبسایت … ) اپلیکیشن را نصب کرده اند و منبع نصب های ارگانیک خود را شناسایی کنید
{:.ltr-text}

## دکمه

<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>

// = require sidebar.js
import $ from 'jquery';
// takes an optional DOM element and uses additional information if present.
// window.analyticsTrackProps = function(el) {
//   let trackOpts = {
//     path: document.location.pathname,
//     url: document.location.href,
//     referrer: document.referrer,
//     title: document.title
//   };

//   let userLogin = window.userData && window.userData['login'];
//   if (userLogin) {
//     trackOpts['user'] = userLogin;
//   }

//   if (el) {
//     let text = $.trim($(el).text());
//     if (text) {
//       trackOpts['cta_text'] = text;
//     }
//   }

//   return trackOpts;
// };

// amplitude.getSessionId wrapper with reference guard
// let getSessionId = function() {
//   if (!window.amplitude || !amplitude.getSessionId) {
//     return -1;
//   }
//   return amplitude.getSessionId();
// };

// let setCookieMinutes = function(name, value, path, expiration) {
//   // expiration is set in minutes
//   let date = new Date();
//   date.setMinutes(date.getMinutes() + expiration);
//   date = date.toUTCString();

//   document.cookie = name + '=' + value + '; path=' + path + '; expires=' + date;
// };

// analytics.track wrapper
// let trackEvent = function(name, properties, options, callback) {
//   if (!window.analytics) {
//     return;
//   }

//   analytics.track(name, properties, options, function() {
//     setCookieMinutes('amplitude-session-id', getSessionId(), '/', 30);
//     if (callback) {
//       callback();
//     }
//   });
// };

// analytics tracking for CTA button clicks
// window.addEventListener('load', function() {
//   let buttons = Array.from(document.querySelectorAll('[data-analytics-action]'));

//   buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       let action = this.getAttribute('data-analytics-action');
//       if (!action) {
//         return;
//       }
//       trackEvent(action, analyticsTrackProps(this));
//     });
//   });
// });

$(document).ready(function() {
  // Give article headings direct links to anchors
  $('article h1, article h2, article h3, article h4, article h5, article h6')
    .filter('[id]')
    .each(function() {
      $(this).append('<a class="anchor-link" href="#' + $(this).attr('id') + '"><i class="fa fa-link"></i></a>');
    });
});

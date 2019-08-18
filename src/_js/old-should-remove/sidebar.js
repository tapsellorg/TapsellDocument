import { getUrlVars } from '../utils';
// making sidebar stick when touching footer
// this improves the visual experience while interacting with the docs site
(function() {
  window.addEventListener('load', () => {
    const sidebar = document.querySelector('.sidebar');

    // get hash, if it exists
    if (window.location.hash && window.location.hash.indexOf('section') > -1) {
      let section = getUrlVars(window.location.hash);
      localStorage.sidenavActive = section['section'];
    }

    if (localStorage.sidenavActive) {
      // fullscreen sidenav expansion
      const sidenavAutoExpand = parent => {
        const element = parent.querySelector('[data-section=' + localStorage.sidenavActive + ']');
        if (element && element.classList.contains('closed')) {
          element.classList.remove('closed');
        }
      };

      if (window.innerWidth > 768) {
        sidenavAutoExpand(sidebar);
      }
    }

    // allowing opening/closing of subnav elements
    let mainNavItems = Array.from(document.querySelectorAll('#sidebar .sidebar-main-item'));
    // let mobileNavItems = Array.from(document.querySelectorAll('.mobile-sidebar .sidebar-main-item'));

    function enableAccordion(array) {
      array.forEach(function(item) {
        let listWrap = item.querySelector('.main-item-parent');
        listWrap.addEventListener('click', function() {
          if (item.classList.contains('closed')) {
            item.classList.remove('closed');
          } else {
            item.classList.add('closed');
          }
        });
      });
    }

    enableAccordion(mainNavItems);
  });
})();

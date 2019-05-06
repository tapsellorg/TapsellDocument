import { getUrlVars } from '../utils';
// making sidebar stick when touching footer
// this improves the visual experience while interacting with the docs site
(function() {
  window.addEventListener('load', function() {
    let footer = document.querySelector('.footer');
    let sidebar = document.querySelector('.sidebar');
    let mobileSidebar = document.querySelector('.sidebar-mobile-wrapper');
    let mobileSidebarCurrent = mobileSidebar.querySelector('.current-item');
    let mobileSidebarDefault = mobileSidebar.querySelector('[data-id="welcome"]');
    let mobileSidebarDisplay = mobileSidebar.querySelector('.mobile-sidebar');

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

      sidenavAutoExpand(sidebar);
      sidenavAutoExpand(mobileSidebar);

      // for mobile sidebar, if sidebar is set, display proper item
      let mobileCurrentElement = mobileSidebar.querySelector('[data-id=' + localStorage.sidenavActive + ']');
      if (mobileSidebarDefault && mobileCurrentElement.classList.contains('hidden')) {
        mobileCurrentElement.classList.remove('hidden');
        mobileSidebarDefault.classList.add('hidden');
      }
    }

    // Show/hide mobile sidebar
    mobileSidebarCurrent.addEventListener('click', function() {
      if (mobileSidebarDisplay.classList.contains('hidden')) {
        mobileSidebarDisplay.classList.remove('hidden');
      } else {
        mobileSidebarDisplay.classList.add('hidden');
      }
    });

    function setSidebar() {
      // if footer is in frame, removed fixed style (otherwise add it, if it doesn't exist)
      if (footer.getBoundingClientRect().top - window.innerHeight <= 0 && footer.getBoundingClientRect().top >= window.innerHeight) {
        if (sidebar.classList.contains('fixed')) {
          sidebar.classList.remove('fixed');
        }
      } else {
        if (!sidebar.classList.contains('fixed')) {
          sidebar.classList.add('fixed');
        }
      }

      // prevents display problems on very large screens with little content
      if (footer.getBoundingClientRect().top <= window.innerHeight) {
        sidebar.style.height = footer.getBoundingClientRect().top - 70 + 'px';
      } else {
        sidebar.style.height = null;
      }
    }

    window.addEventListener('scroll', setSidebar);
    window.addEventListener('load', setSidebar);
    window.addEventListener('resize', setSidebar);

    // allowing opening/closing of subnav elements
    let mainNavItems = Array.from(document.querySelectorAll('#sidebar .main-nav-item'));
    let mobileNavItems = Array.from(document.querySelectorAll('.mobile-sidebar .main-nav-item'));

    function enableAccordion(array) {
      array.forEach(function(item) {
        let listWrap = item.querySelector('.list-wrap');
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
    enableAccordion(mobileNavItems);
  });
})();

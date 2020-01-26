import $ from 'jquery';

$(document).ready(function() {
  // Give article headings direct links to anchors
  $('article h1, article h2, article h3, article h4, article h5, article h6')
    .filter('[id]')
    .each(function() {
      // Remove id and set on a.anchor
      const id = $(this).attr('id');
      $(this).removeAttr('id');
      $(this)
        .children('.anchor')
        .attr('id', id);

      /**
       * Reorder elements
       * and add a.anchor-link
       */
      $(this).append(
        `<a class="anchor-link" href="#${id}">
          <i class="picon-link"></i>
         </a>`,
        $(this)
          .contents()
          .detach()
          .toArray()
          .reverse()
      );
      $(this).prepend();
    });

  $('.highlight .err')
    .filter(function() {
      return this.innerText === '$$';
    })
    .each(function() {
      // console.log('TCL: item', this);
      this.innerText = '';
      this.classList.add('highlight-line-code');
      this.classList.remove('err');
    });
});

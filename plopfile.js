const packageJson = require('./package.json');

module.exports = function(plop) {
  plop.setHelper('path-remove-last-slash', function(text) {
    if (text.endsWith('/')) return text.substring(0, text.length - 1);
    return text;
  });

  plop.setGenerator('markdown-page', {
    description: 'Adds a page to the website',
    prompts: [
      {
        name: 'path',
        type: 'input',
        message: 'Enter the route in which your page should be displayed:',
        transformer: input => `${packageJson.homepage}${input}`,
      },
      {
        name: 'faTitle',
        type: 'input',
        message: 'Title of the article in persian:',
      },
      {
        name: 'hasEnglish',
        type: 'confirm',
        message: 'Do you want to also create the english version of the page?',
        default: false,
      },
      {
        name: 'enTitle',
        type: 'input',
        message: 'Title of the article in persian:',
        when: data => data.hasEnglish,
      },
    ],
    actions: data => {
      const actionMarkdownFile = lang => ({
        type: 'add',
        path: `src/jekyll/docs/{{kebabCase path}}/index-${lang}.md`,
        templateFile: 'plop-templates/markdown-page.hbs',
        data: { lang, title: lang === 'fa' ? data.faTitle : data.enTitle },
      });
      const actions = [actionMarkdownFile('fa')].concat(data.hasEnglish ? [actionMarkdownFile('en')] : []);
      return actions;
    },
  });
};

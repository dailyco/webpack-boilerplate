import 'scss/reset.scss';
import 'scss/layout.scss';
import 'scss/common.scss';

import App from 'views/app';

window.addEventListener('DOMContentLoaded', () => {
  const $body = document.querySelector('body');
  const $app = new App();
  $body.innerHTML = $app.render();
  $app.bindEvents($body);
});

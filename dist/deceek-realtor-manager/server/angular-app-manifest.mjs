
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6519, hash: 'f268b284b0381cf84d1eb90c60f0f2d0b5cf3a2be95005c0ed8bf2df86a84007', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2034, hash: '96ac36fb17a7d716f1aefbf889b7d1b51f40ae000d4baa1d6e76d1f2feea7dd7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2QI7L2TL.css': {size: 333989, hash: 'xX+UhrIJRXY', text: () => import('./assets-chunks/styles-2QI7L2TL_css.mjs').then(m => m.default)}
  },
};

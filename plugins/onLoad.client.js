import Vue from 'vue';
const handleLoad = function (t) {
  t.setAttribute('data-loaded', true);
};
Vue.directive('on-load', {
  bind(el, binding, vnode) {
    el.setAttribute('data-loaded', false);
    if (el.complete) {
      el.setAttribute('data-loaded', true);
    } else {
      el.addEventListener('load', (e) => {
        handleLoad(e.target);
      });
    }
  },
  unbind(el, binding, vnode) {
    el.removeEventListener('load', handleLoad);
  },
});

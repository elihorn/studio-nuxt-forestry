import Vue from 'vue';
Vue.directive('custom-cursor', {
  bind(el, binding, vnode) {
    const { value = '' } = binding;
    const store = vnode.context.$store;
    const hover = function (cursor) {
      store.commit('cursor/add', cursor);
    };
    el.addEventListener('mouseenter', () => {
      hover({ active: true, class: value });
    });
    el.addEventListener('mouseleave', () => {
      hover({ active: false });
    });
  },
  unbind(el, binding, vnode) {
    el.removeEventListener('mouseenter', hover);
    el.removeEventListener('mouseleave', hover);
  },
});

import Vue from 'vue';
let hover;
Vue.directive('custom-cursor', {
  bind(el, binding, vnode) {
    const { value = '' } = binding;
    const store = vnode.context.$store;
    el.classList.add('customcursor');
    hover = function (t, cursor) {
      store.commit('cursor/add', cursor);
    };
    el.addEventListener('mouseenter', (e) => {
      hover(e.target, { active: true, class: value });
    });
    el.addEventListener('mouseleave', (e) => {
      hover(e.target, { active: false });
    });
  },
  unbind(el, binding, vnode) {
    el.removeEventListener('mouseenter', hover);
    el.removeEventListener('mouseleave', hover);
  },
});

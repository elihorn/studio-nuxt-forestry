import Vue from 'vue';

const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        animateOnScrollObserver.unobserve(entry.target);
      }
    });
  }
);

Vue.directive('animate-on-scroll', {
  bind: (el) => {
    el.classList.add('before-enter');
    animateOnScrollObserver.observe(el);
  },
});

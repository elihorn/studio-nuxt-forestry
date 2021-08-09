export const state = () => ({
  active: false,
  class: 'hidden',
  text: '',
});
export const mutations = {
  add(state, cursor) {
    state.active = cursor.active;
    state.class = cursor.class;
    state.text = cursor.text;
  },
};
export const getters = {
  get(state) {
    return state;
  },
};

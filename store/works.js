export const state = () => ({
  list: [],
  work: {},
});
export const mutations = {
  add(state, index) {
    state.list = index;
  },
};
export const getters = {
  get(state) {
    return state.list;
  },
};

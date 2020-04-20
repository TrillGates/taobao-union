export const state = () => ({
  currentActive: ''
});

export const mutations = {
  setCurrentActive(state, value) {
    state.currentActive = value;
  }
};

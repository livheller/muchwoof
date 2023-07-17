//  vstore2 is what nuxt expects

export const state = () => ({
  dogdata: [],
});

export const mutations = {
  updateDogData: (state, data) => {
    state.dogdata = data;
  },
};

export const actions = {
  async getDogData({ state, commit }) {
    if (state.dogdata.length) return;
    try {
      // nuxt provides polyfill so you can use fetch across browsers properly
      await fetch(
        "https://l5zvgk15zg.execute-api.us-west-2.amazonaws.com/Development/dogs",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          commit("updateDogData", data);
        });
    } catch (err) {
      console.log(err);
    }
  },
};

// .server tells nuxt to execute this sever side rather than client side, but couldn't get that to work, so doing it client side for now
// dispatch actions, commit mutations

export default async ({ store }) => {
  await store.dispatch("getDogData");
};

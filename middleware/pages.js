export default function(context) {
  // go tell the store to update the page
  context.store.commit('SET_PAGE', context.route.name)
}
 
  const categories = {
    namespaced: true,
    state: {
      categories: [
        // {
        //"id":"1",
        //"name":"Motherboards",
        //"description":"NULL",
        //"image":"generic_motherboard.jpg",
        //}
      ],
    },
    getters: {
      getCategories(state) {
        return state.categories;
      },
    },
    mutations: {
      addCategories(state, categories) {
        state.categories = categories;
      },
    },
    actions: {
      async getCategoriesFromDB({ commit }) {
        try {
          const response = await fetch(
            "http://daw.deei.fct.ualg.pt/~a61149/LAB11/api/categories.php"
          );
          const data = await response.json();
          console.log("received data:", data);
          commit("addCategories", data);
          return true;
        } catch (error) {
          console.log("error: ", error);
          return false;
        }
      },
    },
    modules: {},
  };
export default 
    categories
  
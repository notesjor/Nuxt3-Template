export const state = () => ({
  data: {
    articles:{
      "":{
        delete: true,
        explaination: [
          {type: "text", text: ""},
          {type: "kwic", text: "", match: "", original:""}
        ]
      }
    },
    query: "",
    sources:{
      "dereko": null, // Response
    }
  }
});

export const mutations = {
  text_set(state, val) {
  },
}

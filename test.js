import produce from "immer"

const a = { hello: { es: "hola", fr: "bonjour" }, goodbye: "adios" }

const b = produce(a, (draft) => {
  draft.hello.es = "hola 2342452"
})

console.log(a)
console.log(b)

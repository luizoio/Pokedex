const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const poke = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
]

// O .filter() aplica uma função 
// em cada item do array 
// que ele estiver percorrendo.

console.log(lista.filter((num) => {
  return num > 2
}))

console.log(poke.filter((name) => {
  return name.includes("y")
}))

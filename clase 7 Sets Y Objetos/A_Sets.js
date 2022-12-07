// Sets o conjuntos

const array = [1, 2, 3, 4, 5, 1, "hola", { id: 5}, "hola"];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

// .add()

miSet.add(9);

console.log(miSet);

// .delete()

miSet.delete("hola");
console.log(miSet);

// .clear()
// miSet.clear(); //borrado total
// console.log(miSet)

// .has //contiene parecido al includes de array

console.log(miSet.has(4));

// .size
console.log(miSet.size);

// Iterar valores

miSet.forEach(valor => {
    console.log(valor);
});

const it_miSet = miSet.values();
console.log(it_miSet.next());
console.log(it_miSet.next())
const ar_miSet = [...miSet]
console.log(ar_miSet[0])



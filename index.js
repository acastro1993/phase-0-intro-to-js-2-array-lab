const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop("hbfh");
}
function destructivelyRemoveFirstCat() {
    cats.shift("alberto");
}
function appendCat(name) {
   return [...cats, name]
}
function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat() {
    return cats.slice(0, 2);
}
function removeFirstCat() {
    return cats.slice(1)
}












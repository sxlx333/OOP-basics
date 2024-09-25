/*
OOP - object oriented programming
- turi savybes
- turi funkcionaluma, kuris manipuliuoja savo savybemis
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Car } from "./js/Car.js";

const reksas = new Dog('Rex', 'black');
console.log(reksas.takeBones(1.5));

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());

console.clear();

const rainis = new Cat('Rainis', 'grey');
console.log(rainis);
console.log(rainis.hi());
console.log(rainis.intro());

console.log(rainis.catchFish());
console.log(rainis.catchFish(4));
console.log(rainis.catchFish(true));
console.log(rainis.catchFish(undefined));

console.clear();

const BMW = new Car('BMW', 'F6');
console.log(BMW);

console.log(BMW.isjungtiVarykli());
console.log(BMW.vaziuotiAtstumas());

console.log(BMW.ijungtiVarikli())
console.log(BMW.vaziuotiAtstumas());


console.log(BMW.uzpiltiKuroLitrais(2));
console.log(BMW.kiekLikoKuroBake());
console.log(BMW.vaziuotiAtstumas());

console.log(BMW.arGaliPrivaziuotiDegaline(200));

/*
CAR
- brandas
- modelis
- kuro bako talpa
- kuro sanaudos 100km

- ijungtiVarykli()
- isjungtiVarykli()
- vaziuoti(atstumas)
- uzpiltiKuro(litrai)
- kiekLikoKuroBake()
- kokiAtstumaGaliDarNuvaziuoti()
- arGaliPrivaziuotiDegaline(atstumas km)
*/
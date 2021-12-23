import Evolution from "./Genetic.js";
import Item from "./Item.js";
import {exchange1, exchange2, exchange3} from "./Parameters/Exchange.js"
import {foundBetter1, foundBetter2} from "./Parameters/FindBetter.js"
import {mutationChange, mutationExchange} from "./Parameters/Mutation.js"
let population = []

for(let i = 0; i < 100; i++) {
    let value = Math.round(Math.random() * 28) + 2
    let weight = Math.round(Math.random() * 24) + 1
    population.push(new Item(weight,value))
}

let exchanges = [exchange1, exchange2, exchange3]
let mutations = [mutationChange, mutationExchange]
let foundBetters = [foundBetter1, foundBetter2]

let bestResult = [null,null,null,0]
let sumOfValues = 0;

let f = new Evolution(population, 100, 250)
for(let i = 0; i < 10000; i++) {
    f.crossover(exchange1, mutationChange, foundBetter1)
}
let [key, ...other] = f.getMaxValue().keys()
bestResult[0] = exchange1
bestResult[1] = mutationChange
bestResult[2] = foundBetter1
bestResult[3] = key
/*
for(let exhange of exchanges) {
    for(let mutation of mutations) {
        for(let foundBetter of foundBetters) {
            let f = new Evolution(population, 100, 250)
            for(let i = 0; i < 1; i++) {
                f.crossover(exhange, mutation, foundBetter)
            }
            let [key, ...other] = f.getMaxValue().keys()
            if(key > bestResult[3]) {
                bestResult[0] = exhange
                bestResult[1] = mutation
                bestResult[2] = foundBetter
                bestResult[3] = key
            }
        }
    }
}
*/
console.log(bestResult)

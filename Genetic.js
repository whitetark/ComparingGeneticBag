export default class Evolution{

    constructor(population, number, maxWeight) {
        this.population = population
        this.number = number
        this.maxWeight = maxWeight
        this.chromosomes = this._initChromosomes()
    }

    _initChromosomes() {

        const startList = new Map()

        for(let i = 0; i < this.number; i++) {

            const chromosome = []
            let weight = 0
            let end = false
            let value = 0

            for(let j = 0; j < this.population.length; j++) {
                if(j >= i & !end) {
                    if(weight + this.population[j].weight > this.maxWeight){
                        chromosome.push(0)
                        end = true
                        continue
                    }
                    chromosome.push(1)
                    weight += this.population[j].weight
                    value += this.population[j].value

                } else {
                    chromosome.push(0)
                }
            }
            if(value != 0) {
                startList.set(value, chromosome)
            }
        }
        return startList
    }

    getMaxValue() {
        let keys = Array.from(this.chromosomes.keys())
        keys.sort((a,b) => a - b)
        return new Map().set(keys[keys.length-1], this.chromosomes.get(keys[keys.length-1]))
    }

    crossover(exchange, mutation, foundBetter) {
        for (let h = 0; h < this.population.length * 0.25; h++) {
            let parents = this._pickParents()

            let child = exchange.call(this, parents)
            
            child = mutation.call(this, child)
        
            
            let value = 0
            let weight = 0
            for(let i = 0; i < this.population.length; i++) {
                if(child[i] == 1) {
                    value += this.population[i].value
                    weight += this.population[i].weight
                }
            }
            let [better, newValue, newWeight] = foundBetter.call(this, child, value, weight)

            if (value < newValue && newWeight <= this.maxWeight) {
                child = better
                value = newValue
            } else if(weight > this.maxWeight && newWeight <= this.maxWeight) {
                child = better
                value = newValue
            } else if (weight > this.maxWeight && newWeight > this.maxWeight) {
                break
            }

            this.chromosomes.set(value, child)
        }

        this._createNewList(0,25)

    }

    _createNewList(coefficient) {
        let newList = new Map()
        let keys = Array.from(this.chromosomes.keys())
        keys.sort()
        keys.splice(0, Math.floor(keys.length*coefficient))
        for(let key of keys) {
            newList.set(key, this.chromosomes.get(key))
        }
        this.chromosomes = newList
    }

        
    _pickParents() { 

        let parents = []
        let keys = Array.from(this.chromosomes.keys())
        keys.sort((a, b) => b - a)
        parents.push(this.chromosomes.get(keys[0]))
        let index = this.chromosomes.size - Math.floor(Math.random() * this.chromosomes.size) - 1
        parents.push(this.chromosomes.get(keys[index]))
        return parents

    }
}
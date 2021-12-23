export function foundBetter1(chromosome, value, weight) {
    let index = 0
    for(let gene = 0; gene < chromosome.length; gene++) {
        if(chromosome[gene] == 1) {
            index = gene
            break
        }
    }
    let newWeight = weight - this.population[index].weight
    let newValue = value - this.population[index].value
    chromosome[index] = 0

    let current = index
    let reverse = false

    while(true) {
        if(current > 0 & !reverse) {
            current--
        } else if (current == 0){
            current = index
            current++
            reverse = true
        } else if (current < chromosome.length - 1 & reverse) {
            current++
        }
        if(newWeight + this.population[current].weight <= this.maxWeight) {
            newWeight += this.population[current].weight
            chromosome[current] = 1
            newValue += this.population[current].value
        } else {
            break
        }
    }

    return [chromosome, newValue, newWeight]
}

export function foundBetter2(chromosome, value, weight) {
    let index = 0
    for(let gene = chromosome.length; gene > 0; gene--) {
        if(chromosome[gene] == 1) {
            index = gene
            break
        }
    }
    
    let newWeight = weight - this.population[index].weight
    let newValue = value - this.population[index].value

        for(let j = index; j > 0; j--) {
            if(chromosome[j] == 1) {
                chromosome[j] = 0
            } else {
                chromosome[j] = 1
                break
            }
        }
    

        for(let i = 0; i < chromosome.length; i++) {
            if(chromosome[i] == 1) {
                newWeight += this.population[i].weight
                newValue += this.population[i].value
            }
        }

    return [chromosome, newValue, newWeight]
}
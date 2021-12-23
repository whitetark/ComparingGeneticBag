export function mutationChange(child) {

    let probability = Math.floor(Math.random() * 100)

    if (probability <= 5) {
        let index = Math.floor(Math.random() * this.population.length)
        child[index] = (child[index] + 1) % 2 
    }

    return child
}

export function mutationExchange(child) {

    let probability = Math.floor(Math.random() * 100)

    if (probability <= 5) {
        let indexFirst = Math.floor(Math.random() * this.population.length/2)
        let indexSecond = Math.floor(Math.random() * this.population.length/2) + Math.round(this.population.length/2)
        let temp = child[indexFirst]
        child[indexFirst] = child[indexSecond]
        child[indexSecond] = temp
    }
    
    return child
}
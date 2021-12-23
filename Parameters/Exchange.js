export function exchange3(parents) {
    let cuts = []
    let child = []

    for(let i = 0; i < 3; i++) {
        cuts.push(Math.floor(Math.random() * this.population.length))
    }
    cuts.sort()

    for(let i = 0; i < this.population.length; i++) {
        if(i < cuts[0]) {
            child.push(parents[0][i])
        } else if ( i < cuts[1]) {
            child.push(parents[1][i])
        } else if (i < cuts[2]) {
            child.push(parents[0][i])
        } else {
            child.push(parents[1][i])
        }
    }
    return child
}

export function exchange2(parents) {
    let cuts = []
    let child = []

    for(let i = 0; i < 2; i++) {
        cuts.push(Math.floor(Math.random() * this.population.length))
    }

    cuts.sort()

    for(let i = 0; i < this.population.length; i++) {
        if(i < cuts[0]) {
            child.push(parents[0][i])
        } else if ( i < cuts[1]) {
            child.push(parents[1][i])
        } else {
            child.push(parents[0][i])
        }
    }
    return child
}

export function exchange1(parents) {
    let cuts
    let child = []
    cuts = Math.floor(Math.random() * this.population.length)

    for(let i = 0; i < this.population.length; i++) {
        if(i < cuts) {
            child.push(parents[0][i])
        } else {
            child.push(parents[1][i])
        }
    }

    return child
}
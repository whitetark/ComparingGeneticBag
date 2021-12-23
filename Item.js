export default class Item{
    constructor(weight, value) {
        this._weight = weight
        this._value = value
    }

    get weight() {

        return this._weight
    }
    
    get value() {
        return this._value
    }

    set neighborhood(value){
        this._neighborhood = value
    }
}
const formatValue = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return value.toUpperCase()
    }
    else if (typeof value === "number") {
        return value * 10
    }
    else if (typeof value === "boolean") {
        return !value
    }
    else {
        return value
    }
}


const getLength = (value: string | any[]) => {

    if (typeof value === "string") {
        return value.length
    }
    else if (Array.isArray(value)) {
        return value.length
    }
    else {
        return value
    }
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type Items = {
    title: string;
    rating: number;
}

const filterByRating = (items: Items[]) => {
    return items.filter(item => item.rating > 4)
}


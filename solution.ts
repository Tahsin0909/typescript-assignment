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

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]) => {
    return users.filter(user => user.isActive === true)
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (item: Book) => {
    console.log(`Title: ${item.title}, Author: ${item.author}, Published: ${item.publishedYear}, Available: ${item.isAvailable ? "Yes" : "No"}`)
}


const getUniqueValues = (array1: number[], array2: number[]) => {
    const set = new Set([...array1, ...array2]);
    return Array.from(set)
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}


const calculateTotalPrice = (products: Product[]) => {
    if (products.length === 0) {
        return 0
    } else {
        const totalPrice = products.reduce((acc, product) => {
            const price = product.discount ? (product.price - product.price * (product.discount / 100)) : product.price
            const quantity = product.quantity
            return acc + (price * quantity)
        }, 0)
        return totalPrice
    }

}

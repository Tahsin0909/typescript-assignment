const formatValue = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return value.toUpperCase()
    }
    else if (typeof value === "number") {
        return value * value
    }
    else if (typeof value === "boolean") {
        return !value
    }
    else {
        return value
    }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

function coerceType(value, targetType){

    //number
    if(targetType === "number"){
        if(typeof value === "number"){
            return Number.isFinite(value) ? value : null
        } 

        if(typeof value === "string"){
            if(value.trim() === "") return null
            const strVal = Number(value)
            return Number.isFinite(strVal) ? strVal : null
        }

        return null
    }

    //boolean
    if (targetType === "boolean") {
        if (typeof value === "boolean") {
            return value;
        }

        if (typeof value === "string") {
            if (value === "true") return true;
            if (value === "false") return false;
            return null;
    }

    return null;
    }

    //string
    if (targetType === "string") {
        if (value === null || value === undefined) return null;
        return String(value);
    }

    return null
}

let vat;
console.log(coerceType( vat, "string"));
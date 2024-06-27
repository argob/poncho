function flattenNestedObjects(entries) {
    return entries.map(entry => {
        return flattenObject(entry, "");
    });
}

function flattenObject(obj, prefix) {
    const flattened = {};
    for (const key in obj) {
        const value = obj[key];
        const newKey = (prefix ? `${prefix}__${key}` : key);

        if (typeof value === "object" && value !== null) {
            Object.assign(flattened, flattenObject(value, newKey));
        } else {
            flattened[newKey] = value;
        }
    }
    return flattened;
}


if (typeof exports !== "undefined") {
    module.exports = {flattenObject, flattenNestedObjects};
}
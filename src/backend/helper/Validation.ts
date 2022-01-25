export const isArrayOfNumberAndHaveElemets = (arr : any) => {
    return Array.isArray(arr) && arr.length === 0 && typeof arr[0] === "number";
}
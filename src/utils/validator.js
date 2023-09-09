
export const requiredField = value => {
    if(value) return undefined
    return "Field is required"
}


export const maxSymbolsCreator = symbols => value => {
    if(value.length <= symbols) return undefined
    return `There are more than ${symbols} symbols`
}
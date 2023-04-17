export function conflictError(message){
    return {
        name: "ConflictError",
        message
    }
}
export function notFoundError(){
    return {
        name: "NotFoundError",
        message: "No result for this search"
    }
}

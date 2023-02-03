export const definePrioryti = (prioryti:number):string => {
    if(prioryti === 0) return "gray"
    else if(prioryti === 1) return "green"
    else if(prioryti === 2) return "red"
    else return "gray"
}
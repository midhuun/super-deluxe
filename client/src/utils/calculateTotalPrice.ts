export const TotalPrice = (arr:any) =>{
  return arr.reduce((acc:number,current:any)=> (current.price*current.quantity)+acc,0)
}
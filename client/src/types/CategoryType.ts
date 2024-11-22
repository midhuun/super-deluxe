export type SubCategory ={
    id:number,
    name:string
}
export type Category ={
    id: number;
    name: string;
    subCategories:SubCategory[]
}
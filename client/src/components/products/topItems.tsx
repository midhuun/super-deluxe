
const TopItems = () => {
 type TopItems ={
    id:number,
    image:string,
    name:string,
    price:number
 }
 const topItems: TopItems[] = [
    {
      id: 1,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c5017ec-5e4f-4cbf-b7ae-20f5728de48c/AS+M+NK+DF+VICTORY+%2B+POLO+BL.png", // Replace with actual image URL
      name: "Polos",
      price:3999
    },
    {
      id: 2,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f84f6a7c-2f1c-41f8-824b-6d0a0dd39893/AS+U+NK+SB+TEE+OC+ROAD+DOGS.png", // Replace with actual image URL
      name: "T-Shirts",
      price:4599
    },
    {
      id: 3,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/87fc5d3f-1e6e-42af-9750-a40a5a814a57/M+J+BRKLN+FLC+PO+GEL+J+DAY.png", // Replace with actual image URL
      name: "Hoodies",
      price:5999
    },
    {
      id: 4,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/16839c48-03c0-450a-b48a-96e9d66d1cf1/AS+W+NSW+PHNX+FLC+FT+HR+PANT+W.png", // Replace with actual image URL
      name: "Pants",
      price:2499
    },
  ];
  
  return (
    <div className="flex flex-wrap mt-[80px] justify-center gap-4 md:gap-8">
        {topItems.map((item:TopItems) =>
             <div key={item.id} className="h-[200px] relative w-[150px] md:w-[330px] md:h-[500px]">
                <img className="w-full object-cover h-[70%]" src={item.image} alt={item.name} />
                <div className=" w-full flex justify-center absolute top-[100px] md:top-[300px] ">
                    <div className="w-[80%] h-[60px] md:h-[100px] flex flex-col justify-center
                     items-center bg-black text-white md:space-y-2">
                        <p className="advertisement text-md md:text-xl">{item.name}</p>
                        <p className="advertisement  font-semibold text-[12px] md:text-sm">From {item.price} /-</p>
                    </div>
                </div>
             </div>)}
    </div>
  )
}

export default TopItems
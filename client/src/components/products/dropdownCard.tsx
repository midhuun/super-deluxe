import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { instructions } from "../../utils/instructions";
type attributes={
    attributes:any,
    description:string | undefined
};
type openType={
    description:boolean,specifications:boolean,washing:boolean,style:boolean,disclaimer:boolean
}
const DropdownCard:React.FC<attributes>= ({attributes,description}) => {
    const [open,setopen]= useState<openType>({description:false,specifications:false,washing:false,style:false,disclaimer:false});  
  return (
    <div className="pt-5">
        <hr />
        <div>
        <div className="relative p-3 cursor-pointer" onClick={()=>setopen((prev)=>({...prev,description:!prev.description}))}>
            <p className="text-gray-800  cursor-pointer select-none">Description</p>
            <p className={`p-2 ${open.description?"block":"hidden"} pt-5 px-3 text-gray-500 text-sm `}>{description}</p>
            {open.description?<RxCaretUp className="absolute top-5 right-1" />:<RxCaretDown className="absolute top-5 right-1" />}
           
         </div>
         <hr />
         </div>
         <div>
        <div className="relative p-3" onClick={()=>setopen((prev)=>({...prev,specifications:!prev.specifications}))}>
            <p className="text-gray-800">Specifications</p>
            <p className={`${open.description?"block":"hidden"}`}></p>
            {open.specifications?<RxCaretUp className="absolute top-5 right-1" />:<RxCaretDown className="absolute top-5 right-1" />}
         </div>
         <hr />
         </div>
         <div>
        <div className="relative cursor-pointer p-3 " onClick={()=>setopen((prev)=>({...prev,washing:!prev.washing}))}>
            <p className="text-gray-800">Washing Instructions</p>
            <div className=" pt-3 px-3 md:pl-5">
            {instructions.map((val,index)=>
            <p className={`p-2  px-3 ${open.washing?"block":"hidden"} text-gray-500 text-sm `} key={index}>{val}</p>
            )}
            </div>
            {open.washing?<RxCaretUp className="absolute top-5 right-1" />:<RxCaretDown className="absolute top-5 right-1" />}
         </div>
         <hr />
         </div>
         <div>
        <div className="relative p-3 cursor-pointer" onClick={()=>setopen((prev)=>({...prev,style:!prev.style}))}>
            <p className="text-gray-800">Style Note</p>
            <p className={`p-2 pt-5 ${open.style?"block":"hidden"} px-3 text-gray-500 text-sm `}>Made from organic cotton constructed in one single color.</p>
            {open.style?<RxCaretUp className="absolute top-5 right-1" />:<RxCaretDown className="absolute top-5 right-1" />}
         </div>
         <hr />
         </div>
         <div>
        <div className="relative cursor-pointer p-3" onClick={()=>setopen((prev)=>({...prev,disclaimer:!prev.disclaimer}))}>
            <p className="text-gray-800">Disclaimer</p>
            <p className={`p-2 ${open.disclaimer?"block":"hidden"} pt-5 px-3 text-gray-500 text-sm `}>Product color may slightly vary due to photographic lighting sources or your monitor settings. Therefore, it cannot be exchanged or return. Please refer to wash care instructions Label before washing as each product washing technique varies.</p>
            {open.disclaimer?<RxCaretUp className="absolute top-5 right-1" />:<RxCaretDown className="absolute top-5 right-1" />}
         </div>
         <hr />
         </div>
    
    </div>
  )
}

export default DropdownCard
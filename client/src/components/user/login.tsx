import { useState } from "react"
import PhoneInput from 'react-phone-input-2'

const Login = () => {
  const [value,setvalue] = useState("");
  console.log(value)
  return (
    <div className="w-full flex flex-col space-y-3 md:space-y-4 items-center pt-10">
        
        <h1 className="font-semibold text-xl md:text-2xl">Login or Signup</h1>
        <h3 className=" text-lg">Enter your log in details</h3>
        <div>
        <PhoneInput
          buttonStyle={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4x",
          }}
          dropdownStyle={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
         country={"in"} value={value} onChange={setvalue} placeholder="enter your phone number" />
         </div>
    </div>
  )
}

export default Login
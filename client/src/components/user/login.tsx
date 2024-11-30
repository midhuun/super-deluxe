//@ts-nocheck
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import { app } from "../../auth/initializeApp";
import { getFirestore } from "firebase/firestore/lite";
import { auth } from "../../auth/initializeApp";
import validator from "validator";
import { ToastContainer,toast } from "react-toastify";
import Flag from '../../../public/flag.svg'
import Successtoast from "../toast/successtoast";
import { redirect } from "react-router-dom";
import Errortoast from "../toast/errortoast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [value, setvalue] = useState<string>("");
  const [resendMsg,setresendMsg] = useState(false);
  const [usercreated,setusercreated] = useState(false);
  const [btnmsg,setbtnmsg] = useState("Get OTP");
  const [isverifying,setisverifying] = useState(false)
  const [otp, setotp] = useState<string>(""); 
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [toastmsg,settoastmasg] = useState("");
  const [istoast,setistoast] = useState(false);
  const [error,seterror] = useState("");
  const [iserror,setiserror] = useState(false);
  const [isotpsent,setisotpsent] = useState(false);
  const [isverified, setisverified] = useState(false);
  const [formData,setformData] = useState({firstName:"",lastName:"",email:"",phone:""});
  function oncaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
       auth,"recaptcha",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {
            console.log("Recaptcha expired");
          },
        }
      );
    }
  }
  function sendotp(value){
    setisotpsent(value);
    setistoast(true);
    settoastmasg("OTP sent Successfully");
    setTimeout(() => {
      setistoast(false);
      settoastmasg("");
    }, 3000);
    
  }
  function onSignup(){
    setisverifying(true);
    setbtnmsg("Sending OTP ....")
    setTimeout(() => {
      setbtnmsg("Verify OTP")
    }, 2000);
    try{
      if(!validator.isMobilePhone(value,"en-IN")){
        setiserror(true);
        seterror("Invalid Mobile Number")
        setTimeout(() => {
          setiserror(false)
        }, 2500);
        seterror("Enter valid Phone Number");
        throw new Error("Enter Valid Phone Number")
      }
    auth.settings.appVerificationDisabledForTesting = true;
    oncaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+91" + value; // Phone number with country code
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        console.log("Sign-in success",confirmationResult);
        sendotp(true);
      })
      .catch((error) => {
        console.error("Enter Valid details", error);

      });
    }
    catch(err){
      console.log(err);
      setiserror(true)
      setTimeout(() => {
        setiserror(false)
      }, 2500);
      seterror("Enter Valid details");

    }
  }
 async function otpverified(){
     const res= await fetch("http://localhost:3001/user/login",
      {method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      credentials:'include',
      body:JSON.stringify({phone:value}),
      
    })
    const data = await res.json();
    if(data.userexists){
      setusercreated(true);
      navigate('/account');
    }
    if(data.status===200){
      setisverified(true);
      toastmsg("OTP verified")
    setistoast(true);
    setTimeout(() => {
      setistoast(false);
    }, 2000);
    }
    else{
      setiserror(true)
        setTimeout(() => {
          setiserror(false)
        }, 2500);
        seterror("Error during Sign-in");
    }
  }
  function onOTPVerify() {
    setbtnmsg("Verifying OTP...")
    if (!confirmationResult) {
      console.log("No confirmation result available");
      return;
    }
    confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("OTP verified, user signed in:", res);
        otpverified();
      })
      .catch((err) => {
        console.error("OTP verification failed:", err);
        setiserror(true)
        setbtnmsg("Verify OTP")
        setTimeout(() => {
          setiserror(false)
        }, 2500);
        seterror("Enter correct OTP");
      });
  }
  async function updateDetails(e:React.FormEvent){
    e.preventDefault();
    try{
    const res = await fetch("http://localhost:3001/user/update",{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
      credentials:'include'
    });
    console.log( await res.json());
  }
  catch(err){
    console.log(err)
  }
  }
  return (
    <div className="w-full md:h-screen flex flex-col space-y-3 md:space-y-4 items-center pt-10">
     <Successtoast toastmsg={toastmsg} istoast={istoast} />
     <Errortoast iserror={iserror} errormsg={error} />
      <div id="recaptcha"></div>
      {isotpsent && !isverified?<>
          <h1 className="text-sm md:text-md font-semibold">Enter OTP</h1>
          <p className="text-sm md:text-md" >The OTP is sent on Mobile Number</p>
          <p className="tracking-widest text-sm md:text-md">+91{value}</p>
            <OTPInput
                numInputs={6}
                value={otp}
                onChange={setotp}
                renderInput={(props) => <input {...props} />}
                separator={<span>-</span>}
                inputStyle={{
                    width: '1.5rem', 
                    height: '1.5rem',
                    margin:'3px',
                    fontSize: '1rem',
                    borderBottom: '1px solid black', 
                    padding: '0.5rem', 
                    textAlign: 'center', 
                    outline:'none'
                }}
            />
      <button className="w-[150px] md:w-[300px] bg-black text-white py-3" onClick={onOTPVerify}>{btnmsg}</button>
       <p className="tracking-wider">Didn't receive your OTP ?</p>
       <button onClick={onSignup} className=" underline">Resend OTP</button>
      </>:
      <>{!isverified &&<><h1 className="font-semibold text-xl md:text-2xl">Login or Signup</h1>
      <h3 className="text-sm md:text-md">Enter your log in details</h3>
      <div>
       <div className="flex focus:outline-black relative rounded-md border border-gray-700">
        <select disabled className="py-3 px-1 text-black w-auto" name="" id="">
        <option className="!w-[300px] text-sm md:text-md pt-5 mt-5  bg-gray-400" value="+91">+91</option>
        </select>
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setvalue(e.target.value)} className="md:w-[300px] w-[150px] md:text-lg tracking-wide md:tracking-widest p-3 focus:outline-none" type="text" name="" id="" />
       </div>
      </div>
      <button className="py-3 w-[150px] text-sm md:text-md md:w-[300px] bg-black text-white" onClick={onSignup}>{btnmsg}</button></>}
      </>}
     {(isverified && !usercreated) &&
     <div className="px-1">
      <h1 className="font-semibold text-lg md:text-2xl">Enter account details</h1>
      <form onSubmit={(e)=>updateDetails(e)} className="py-2 space-y-3 flex flex-col" action="">
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setformData((prev)=>({...prev,firstName:e.target.value}))} required placeholder="First Name" className="border focus:outline-none py-2 px-3 md:py-3 w-[200px] md:w-[300px]" type="text" name="" id="" />
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setformData((prev)=>({...prev,lastName:e.target.value}))} required placeholder="Last Name" className="border focus:outline-none py-3 px-3 md:py-2 w-[200px] md:w-[300px]" type="text" name="" id="" />
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setformData((prev)=>({...prev,email:e.target.value,phone:value}))} placeholder="Email" className="border focus:outline-none px-3 md:py-3 py-2 w-[200px] md:w-[300px]" type="text" name="" id="" />
        <input className="border focus:outline-none md:py-3 px-3 py-2 w-[200px] md:w-[300px]" disabled type="text" value={`+91 ${value}`} name="" id="" />
        <button className="border focus:outline-none bg-black text-white md:py-3 px-3 py-2 w-[200px] md:w-[300px]">Update</button>
      </form>
     </div>
     }
      
    </div>
  );
};

export default Login;

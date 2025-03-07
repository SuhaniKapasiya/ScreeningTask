import { useState } from "react";
import axios from "axios";

const useGreeting = () => {

  const [message, setMessage] = useState("");

  const getGreeting = async(name)=>{
     if(!name){
        setMessage("Name is required")
        return
     }
     try{

        const response = await axios.get(
          `https://screeningtaskbackend.onrender.com/api/greet?name=${name}`
        );
         setMessage(response.data.message);
         
     }catch(error){
     
        setMessage("Error fetching greeting.");
     }
  }
   return { message, getGreeting };
};


export default useGreeting;
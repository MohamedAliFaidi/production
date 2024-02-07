import { useState } from "react"
import { axiosClient } from "../../service/auth.service";

function Profile() {
  const [data,setData]= useState("")


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setData(reader.result)
        
    };

    reader.readAsDataURL(file);
};
  
  return (
    <div><input onChange={handleFileInputChange} type="file"/>
     <button onClick={async ()=>{
      await axiosClient.post("http://localhost:3000/upload",{data} ,{
        
      }).then(res=>console.log(res)).catch(err=>{
        console.log(err)
      })
     }} > upload</button>
    </div>
  )
}

export default Profile
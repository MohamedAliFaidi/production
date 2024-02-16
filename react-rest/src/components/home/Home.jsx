import { Suspense } from "react"
import { Spinner } from "@material-tailwind/react";

const LoadingFallback = () => {
  return   <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Spinner className="h-16 w-16 text-gray-900/50" /></div>
}


function Home() {
  return (
  
    <div></div>

  )
}

export default Home
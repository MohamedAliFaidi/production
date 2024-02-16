import { Suspense } from "react"
import {LoadingFallback} from "../../service/Auth"

function Home() {
  return (
    <Suspense  fallback={<LoadingFallback />}  >
    <div></div>
    </Suspense>
  )
}

export default Home
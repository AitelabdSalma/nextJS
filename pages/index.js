import { execOnce } from "next/dist/shared/lib/utils"
import Link from "next/link"

  function Home(){
    return(
    <div>
            <h1>Home page 1</h1>
            <h2>
                <Link  href='/docs'>
                    Docs
                </Link>
            </h2>
            <h2>
                <Link   href='/product'>
                    ProductList
                </Link>
            </h2>
        </div>
        )
}

export default Home
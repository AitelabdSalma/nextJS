import { execOnce } from "next/dist/shared/lib/utils"
import Link from "next/link"
import { useRouter } from "next/router";

  function Home(){

    const router = useRouter()
    const handelClick =()=>{
        console.log('Placing your order');
        router.push('/product')
    }
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
            <button onClick={handelClick}>
                Place order
            </button>
        </div>
        )
}

export default Home
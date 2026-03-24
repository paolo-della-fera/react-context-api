import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useBudget } from "../components/context/BudgetContext"


export default function Prodotti() {
    const [prodotti, setProdotti] = useState([])
    const { maxPrice  } = useBudget()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProdotti(data))
    }, [])

    const prodottiVisibili = maxPrice  
        ? prodotti.filter(prodotto => prodotto.price <= maxPrice )
        : prodotti
    
    return (
        <>

            <main>

                {/* card prodotti */}
                <div className="container">

                    <h1 className="text-center mt-3">I nostri Prodotti</h1>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-5">

                        {prodottiVisibili.map(prodotto =>
                            <div className="col" key={prodotto.id}>
                                <Link to={`/prodotti/${prodotto.id}`} className="text-decoration-none">

                                    <div className="card h-100">
                                        <img src={prodotto.image} className="card-img-top p-2" alt={prodotto.title} />
                                        <div className="card-body">
                                            <span className="badge mb-2 text-uppercase">
                                                {prodotto.category}
                                            </span>
                                            <h5 className="card-title">{prodotto.title}</h5>
                                            <p className="fw-bold fs-4 text-success">${prodotto.price}</p>
                                        </div>
                                    </div>

                                </Link>

                            </div>
                        )}

                    </div>

                </div>


            </main>

        </>
    )
}
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'

export default function DettagliProdotto() {

    const { id } = useParams()
    const [prodotto, setProdotto] = useState(null)


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProdotto(data))
    }, [id])

    if (!prodotto) return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <Hourglass size="40" bgOpacity="0.1" speed="1.75" color="black" />
        </div>
    )

    return (

        <main className="container my-5">

            <div className="row align-items-center">

                <div className="col-12 col-md-5 text-center">
                    <img src={prodotto.image} alt={prodotto.title} className="img-fluid p-4" style={{ maxHeight: '400px' }} />
                </div>

                <div className="col-12 col-md-7">
                    <span className="badge bg-secondary text-uppercase mb-3">{prodotto.category}</span>
                    <h1 className="fw-bold">{prodotto.title}</h1>
                    <p className="text-muted my-3">{prodotto.description}</p>
                    <p className="fw-bold fs-3 text-success">${prodotto.price}</p>
                    <p>
                        ⭐ {prodotto.rating.rate} / 5 ({prodotto.rating.count} recensioni)
                    </p>
                </div>

            </div>

        </main>
    )
}
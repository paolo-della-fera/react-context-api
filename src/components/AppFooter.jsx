import { Link } from "react-router-dom";

export default function AppFooter() {


    return (
        <footer className="mt-5 py-5">
            <div className="container">
                <div className="row">

                    {/* Colonna 1 - Info */}
                    <div className="col-12 col-md-4 mb-4">
                        <h5 className="fw-bold">Il Nostro Shop</h5>
                        <p className="text-muted">
                            Il tuo negozio online di fiducia. Qualità e convenienza in un solo posto.
                        </p>
                    </div>

                    {/* Colonna 2 - Link utili */}
                    <div className="col-12 col-md-4 mb-4">
                        <h5 className="fw-bold">Link Utili</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-muted text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/Prodotti" className="text-muted text-decoration-none">
                                    Prodotti
                                </Link>
                            </li>
                            <li>
                                <Link to="/ChiSiamo" className="text-muted text-decoration-none">
                                    Chi Siamo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colonna 3 - Contatti */}
                    <div className="col-12 col-md-4 mb-4">
                        <h5 className="fw-bold">Contatti</h5>
                        <ul className="list-unstyled text-muted">
                            <li>📧 info@shop.com</li>
                            <li>📞 +39 000 000 0000</li>
                            <li>📍 Via Roma 1, Milano</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}
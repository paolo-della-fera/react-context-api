import { NavLink } from "react-router-dom";
import { useBudget } from "./context/BudgetContext";

/* navbar */
const menu = [
    {
        id: 1,
        path: '/',
        text: 'Home'
    },
    {
        id: 2,
        path: '/ChiSiamo',
        text: 'Chi Siamo'
    },
    {
        id: 3,
        path: '/Prodotti',
        text: 'Prodotti'
    },
]

export default function AppHeader() {
    const { maxPrice, setMaxPrice } = useBudget();

    return (
        <header>

            <nav className="navbar">
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav flex-row gap-3">

                        {
                            menu.map(item =>
                                <li className="nav-item" key={item.id}>
                                    <NavLink className="nav-link" to={item.path}>
                                        {item.text}
                                    </NavLink>
                                </li>
                            )
                        }

                    </ul>

                    {/* <button className="btn ms-auto btn-budget" onClick={() => setBudgetMode(!budgetMode)}>
                        {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                    </button> */}

                    <input
                        type="number"
                        className="form-control ms-auto mt-2"
                        placeholder="Prezzo massimo"
                        value={maxPrice ?? ""}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />

                </div>
            </nav>

        </header>
    )
}
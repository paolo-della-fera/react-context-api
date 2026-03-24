import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();


export function BudgetProvider({ children }) {
    const [maxPrice, setMaxPrice] = useState(null);
    
    
    return (
       
        <BudgetContext.Provider value={{ maxPrice, setMaxPrice }}>
            {children}
        </BudgetContext.Provider>

    );
}


export function useBudget() {
    return useContext(BudgetContext)
}
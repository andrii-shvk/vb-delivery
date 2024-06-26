import { useGetBurgers, useGetOthers, useGetPizzas } from '@/api/rtkApi';
import { ContactInfo } from '@/components/ContactInfo';
import { ProductTape } from '@/components/ProductTape';
import { memo } from 'react';


const MainPage = memo(() => {
    const {data: productPizza, isLoading: pizzaLoading, error: pizzaError} = useGetPizzas();
    const {data: productBurger, isLoading: burgerLoading, error: burgerError} = useGetBurgers();
    const {data: productOther, isLoading: otherLoading, error: otherError} = useGetOthers();

    return (
        <>
            <ProductTape 
                title="Pizza"
                products={productPizza}
                isLoading={pizzaLoading}
                error={pizzaError}
            />
            <ProductTape 
                title="Burgers"
                products={productBurger}
                isLoading={burgerLoading}
                error={burgerError}
            />
            <ProductTape 
                title="Other"
                products={productOther}
                isLoading={otherLoading}
                error={otherError}
            />
            <ContactInfo />
        </>
    )
});
 
export default MainPage;
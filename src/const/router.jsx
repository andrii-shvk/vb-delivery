import { BurgersPage } from "@/pages/BurgersPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { OthersPage } from "@/pages/OthersPage";
import { PizzasPage } from "@/pages/PizzasPage";

const routerNavigations = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/pizzas',
        element: <PizzasPage />
    },
    {
        path: '/burgers',
        element: <BurgersPage />
    },
    {
        path: '/others',
        element: <OthersPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
]
export {routerNavigations};
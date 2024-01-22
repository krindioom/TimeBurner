import { selector } from "recoil";
import { productsState } from "../atoms/ProductsState";
import { curentProductCategoryState } from "../atoms/CurentProductCategoryState";

export const categoryFilter = selector({
    key: "categoryFilter",
    get: ({ get }) => {
        console.log("prod cat")
        const curentCategory = get(curentProductCategoryState);
        const products = get(productsState);
        return products.filter((item) => {
            return item.category === curentCategory;
        });
    },
});

import { selector } from "recoil";
import { boughtItemsState } from "../atoms/BoughtItemsState";
import { productsState } from "../atoms/ProductsState";
import { categoryFilter } from "./CategoryFilter";

export const displayingProductsFilter = selector({
    key: "displayingProductsFilter",
    get: ({ get }) => {
        const categoriesFilteredProducts = get(categoryFilter);

        const purchasedItems = get(boughtItemsState);
    

        return categoriesFilteredProducts.map((item) => {
            const result = {
                ...item,
                isPurchased: false,
            };

            if (purchasedItems.find((el) => el.id === item.id)) {
                result.isPurchased = true;
                return result;
            }

            return result;
        });
    },
});

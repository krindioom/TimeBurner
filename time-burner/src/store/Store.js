import { Col, Grid, Row } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import { categoryFilter } from "../recoil/selectors/CategoryFilter";
import ProductCard from "./ProductCard";
import { stopwatchState } from "../recoil/atoms/StopwatchState";
import { displayingProductsFilter } from "../recoil/selectors/DisplayingProductsFilter";

const Store = () => {
    const columnConfig = {
        xs: 24,
        sm: 12,
        md: 8,
        lg: 6,
        xl: 4,
    };

    //const filteredProductsByCategory = useRecoilValue(categoryFilter);

    const products = useRecoilValue(displayingProductsFilter);
    const displayAvaliableProducts = products.filter(
        (item) => !item.isPurchased
    );
    const productsView = displayAvaliableProducts.map((item, index) => (
        <Col style={{ marginTop: "20px" }} key={index} {...columnConfig}>
            <ProductCard
                key={item.id}
                id={item.id}
                title={item.name}
                price={item.price}
            />
        </Col>
    ));
    return (
        <Row align="bottom" justify="space-around">
            {" "}
            {productsView}{" "}
        </Row>
    );
};

export default Store;

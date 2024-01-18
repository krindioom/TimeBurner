import { Col, Grid, Row } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import { categoryFilter } from "../recoil/selectors/CategoryFilter";
import ProductCard from "./ProductCard";

const Store = () => {
    const columnConfig = {
        xs: 24,
        sm: 12,
        md: 8,
        lg: 6,
        xl: 4,
    };

    const filteredProducts = useRecoilValue(categoryFilter);

    const productsView = filteredProducts.map((item, index) => (
        <Col style={{ marginTop: "20px" }} key={index} {...columnConfig}>
            <ProductCard title={item.name} price={item.price} />
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

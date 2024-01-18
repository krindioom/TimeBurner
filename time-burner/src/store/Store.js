import { Col, Grid, Row } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import {categoryFilter} from "../recoil/selectors/CategoryFilter"

const Store = () => {
    const columnConfig = {
        xs: 24,
        sm: 12,
        md: 8,
        lg: 6,
        xl: 4,
    };

    const filteredProducts = useRecoilValue(categoryFilter);

    const a = filteredProducts();
    return <Row></Row>;
};

export default Store;

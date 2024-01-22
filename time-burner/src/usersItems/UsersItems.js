import React from "react";
import { useRecoilValue } from "recoil";
import { boughtItemsState } from "../recoil/atoms/BoughtItemsState";
import UsersItemCard from "./UsersItemCard";
import { Col, Row } from "antd";

const UsersItems = () => {
    const columnConfig = {
        xs: 24,
        sm: 12,
        md: 8,
        lg: 6,
        xl: 4,
    };

    const usersItems = useRecoilValue(boughtItemsState);

    const itemsView = usersItems.map((item, index) => (
        <Col style={{ marginTop: "20px" }} key={index} {...columnConfig}>
            <UsersItemCard id={item.id} title={item.title} />
        </Col>
    ));

    return (
        <Row align="bottom" justify="space-around">
            {" "}
            {itemsView}{" "}
        </Row>
    );
};

export default UsersItems;

import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const ProductCard = ({ title, price }) => {
    return (
        <Card
            bodyStyle={{
                backgroundColor: "#9d0208",
            }}
            headStyle={
                {
                    backgroundColor: "#370617",
                }
            }
            bordered={false}
            hoverable
            title={title}
        >
            <Meta title={price} />
        </Card>
    );
};

export default ProductCard;

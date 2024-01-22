import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { stopwatchState } from "../recoil/atoms/StopwatchState";
import { productsState } from "../recoil/atoms/ProductsState";
import { boughtItemsState } from "../recoil/atoms/BoughtItemsState";

const ProductCard = ({ id, title, price }) => {
    const stopwatchValue = useRecoilValue(stopwatchState);
    const setPurchasedItem = useSetRecoilState(boughtItemsState);
    const isAvaliable = stopwatchValue < price;

    return (
        <Card
            bodyStyle={{
                backgroundColor: "#9d0208",
            }}
            headStyle={{
                backgroundColor: "#370617",
            }}
            color={isAvaliable ? "#d00000" : "#0e0"}
            bordered={false}
            hoverable
            title={title}
        >
            <Button
                onClick={() => {
                    setPurchasedItem((curent) => {
                        return [
                            ...curent,
                            {
                                id: id,
                                title: title,
                            },
                        ];
                    });
                }}
                type="primary"
                disabled={isAvaliable}
            >
                {price} sec
            </Button>
        </Card>
    );
};

export default ProductCard;

import { Card } from "antd";
import React from "react";

const UsersItemCard = ({id, title}) => {
    return (
        <Card
            bodyStyle={{
                backgroundColor: "#9d0208",
            }}
            headStyle={{
                backgroundColor: "#370617",
            }}
            bordered={false}
            hoverable
            title={title}
        >
            
        </Card>
    );
};

export default UsersItemCard;

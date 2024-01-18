import { ConfigProvider, Menu } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { curentProductCategoryState } from "../recoil/atoms/CurentProductCategoryState";

const MainLayout = () => {
    const setCurentCategory = useSetRecoilState(curentProductCategoryState);

    const items = [
        {
            label: <Link to="/">главная</Link>,
            key: "main",
        },
        {
            label: "магазин",
            key: "store",
            children: [
                {
                    label: (
                        <Link
                            to="store"
                            onClick={() => setCurentCategory("backgrounds")}
                        >
                            фоны
                        </Link>
                    ),
                },
                {
                    label: (
                        <Link
                            to="store"
                            onClick={() => setCurentCategory("pins")}
                        >
                            значки
                        </Link>
                    ),
                },
            ],
        },
        {
            label: "моё",
            key: "myItems",
        },
    ];

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            darkItemBg: "#000",
                            itemActiveBg: "red",
                        },
                    },
                }}
            >
                <Menu theme="dark" mode="horizontal" items={items} />
            </ConfigProvider>
            <Outlet />
        </>
    );
};

export default MainLayout;

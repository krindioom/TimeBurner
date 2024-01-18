import { atom } from "recoil";

export const productsState = atom({
    key: "productsState",
    default: [
        {
            id: 0,
            category: "backgrounds",
            name: "bg-1",
            price: 100,
        },
        {
            id: 1,
            category: "pins",
            name: "pin-1",
            price: 500,
        },
        {
            id:2,
            category: "backgrounds",
            name: "bg-2",
            price: 300,
        },
    ]
});

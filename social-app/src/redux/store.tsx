'use client'
import { Store } from "redux"
import reducer from "./reducer"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store: Store = configureStore({ reducer });
const StoreWraper = ({ children }: React.PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>
}

export default StoreWraper;
import React, { ReactNode, memo } from "react";
import { Provider } from "react-redux";
import { AppStore } from "../../../store/types";

type StoreProps = {
    store: AppStore;
    children: ReactNode;
};

export const StoreProvider: React.FC<StoreProps> = memo(
    ({ store, children }) => <Provider store={store}>{children}</Provider>
);

StoreProvider.displayName = "StoreProvider";

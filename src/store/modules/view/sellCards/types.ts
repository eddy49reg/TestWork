import { SellsCard } from "../../model/endpoints";

export interface SellCardsState {
    items: SellsCard[];
    filter: {
        query: string;
        status: string;
    };
}

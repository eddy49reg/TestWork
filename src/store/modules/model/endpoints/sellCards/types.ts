export type GetSellsCardResponse = {
    data: SellsCard[];
};

export type SellsCard = {
    id: number;
    orderSumm: number;
    companyName: string;
    inn: number;
    status: Status;
    tag: Tag[];
    directorName: string;
    date: string;
};

export type Status = "новый" | "исполнение" | "на экспертизе" | "выполнен";

export type Tag = {
    id: number;
    title: string;
};

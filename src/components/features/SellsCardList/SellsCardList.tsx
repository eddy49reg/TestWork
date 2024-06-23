import React, { useState } from "react";
import { useGetSellsCardsQuery } from "../../../store/modules/model/endpoints/sellCards/endpoints";
import { SellsCard } from "../../../store/modules/model/endpoints/sellCards/types";
import { StyledCardList, StyledFilterInput } from "./styles";
import { SellCard } from "./components/SellCard";

export function SellCardsList() {
    const { data, error, isLoading } = useGetSellsCardsQuery();
    const [filter, setFilter] = useState<{ id: string; companyName: string }>({
        id: "",
        companyName: "",
    });
    const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilter(prev => ({ ...prev, [name]: value }));
    };

    const filteredData = data?.data?.filter(
        (card: SellsCard) =>
            (filter.id ? card.id.toString().includes(filter.id) : true) &&
            (filter.companyName
                ? card.companyName.toLowerCase().includes(filter.companyName)
                : true)
    );

    const handleToggle = (id: number) => {
        setExpandedCardId(expandedCardId === id ? null : id);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.toString()}</div>;
    }

    return (
        <div>
            <StyledFilterInput
                type="text"
                name="id"
                value={filter.id}
                onChange={handleFilterChange}
                placeholder="Номер заявки"
            />
            <StyledFilterInput
                type="text"
                name="companyName"
                value={filter.companyName}
                onChange={handleFilterChange}
                placeholder="Наименование клиента"
            />
            <StyledCardList>
                {filteredData?.map(card => (
                    <SellCard
                        key={card.id}
                        card={card}
                        isExpanded={expandedCardId === card.id}
                        onToggle={() => handleToggle(card.id)}
                    />
                ))}
            </StyledCardList>
        </div>
    );
}

import { SellsCard } from "../../../../../store/modules/model/endpoints";
import {
    CardBody,
    StyledCardContainer,
    CardFooter,
    StyledCardHeader,
    StatusTag,
    Tag,
} from "./styles";

type SellsCardProps = {
    card: SellsCard;
    isExpanded: boolean;
    onToggle: () => void;
};
export function SellCard(props: SellsCardProps) {
    const { card, isExpanded, onToggle } = props;

    return (
        <StyledCardContainer isExpanded={isExpanded}>
            <StyledCardHeader onClick={onToggle}>
                Проверить данные клиента
            </StyledCardHeader>
            <CardBody>
                <div>{card.orderSumm} руб.</div>
                <div>{card.companyName}</div>
                <div>ИНН {card.inn}</div>
                {isExpanded && (
                    <>
                        <div>
                            <StatusTag>{card.status.toUpperCase()}</StatusTag>
                        </div>
                        <div>{card.directorName}</div>
                        <div>
                            {card.tag.map(tag => (
                                <Tag key={tag.id}>{tag.title}</Tag>
                            ))}
                        </div>
                    </>
                )}
            </CardBody>
            <CardFooter>
                <div>{card.id}</div>
                <div>{card.date}</div>
            </CardFooter>
        </StyledCardContainer>
    );
}

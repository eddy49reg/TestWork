import { ReactNode } from "react";
import { StyledContent } from "./styles";

type LayoutProps = {
    children: ReactNode | ReactNode[];
};

export function Layout(props: LayoutProps) {
    const { children } = props;
    return <StyledContent>{children}</StyledContent>;
}

import styled from "@emotion/styled";

export const StyledCardList = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "16px",
    padding: "16px",
    alignItems: "start",
});

export const StyledFilterInput = styled("input")({
    margin: "16px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
});

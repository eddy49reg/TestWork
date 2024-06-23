import styled from "@emotion/styled";

export const StyledCardContainer = styled("div")<{
    isExpanded: boolean;
}>(({ isExpanded }) => ({
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    gridColumn: "span 1",
    gridRow: isExpanded ? "span 2" : "span 1",
    height: isExpanded ? "calc(2 * 200px + 32px)" : "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: isExpanded ? "space-between" : "flex-start",
    alignItems: "flex-start",
    paddingTop: isExpanded ? "16px" : "8px",
    ":hover": {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
}));

export const StyledCardHeader = styled("h3")({
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "8px",
    cursor: "pointer",
});

export const CardBody = styled("div")({
    fontSize: "1em",
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "8px",
});

export const CardFooter = styled("div")({
    fontSize: "0.8em",
    color: "#888",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
});

export const Tag = styled("span")({
    backgroundColor: "#e0e0e0",
    borderRadius: "4px",
    padding: "4px 8px",
    marginRight: "4px",
});

export const StatusTag = styled(Tag)({
    backgroundColor: "#d1e7dd",
    color: "#0f5132",
});

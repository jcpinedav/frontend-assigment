import { breakpoints } from "@/styles/breakpoints";
import { createUseStyles } from "react-jss";
//Estilos usados en el pie de página
export const footerStyles = createUseStyles({
  mainFooterStyles: {
    position: "fixed",
    bottom: "0px",
    right: "0px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    background: "#000000",
    marginTop: "50px",
    [`@media (max-width: ${breakpoints.lg}px)`]: { height: "unset" },
  },
  internalFooterStyles: {
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    fontSize: "12px",
    [`@media (max-width: ${breakpoints.lg}px)`]: {
      flexDirection: "column",
      rowGap: "15px",
      padding: "20px 0px",
    },
  },
  containerIconStyles: {
    display: "flex",
    alignItems: "center",
    "& *": { fill: "#fff !important" },
    gap: "20px",
  },
  textFooterStyles: {
    alignItems: "center",
    display: "flex",
    gap: "20px",
  },
});

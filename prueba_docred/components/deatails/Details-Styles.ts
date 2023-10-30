import { createUseStyles } from "react-jss";

export const detailsStyles = createUseStyles({
  mainDate: {
    marginTop: "70px",
    color: "#000000",
    fontWeight: "bold",
    display: "flex",
  },
  externalMainData: {
    maxWidth: "1000px",
    width: "100%",
    display: "flex",
    justifyContent: "start",
  },
  mainContaincerDetails: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  internalContaincerDetails: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

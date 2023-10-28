import { createUseStyles } from "react-jss";

export const homeStyles = createUseStyles({
  mainContainerCards: {
    marginTop: "100px",
    marginBottom: "100px",
    maxWidth: "1000px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  mainContaincerHome: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

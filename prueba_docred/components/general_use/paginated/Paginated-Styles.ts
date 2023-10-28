import { createUseStyles } from "react-jss";

export const paginatedStyles = createUseStyles({
  mainContainerButtom: {
    marginBottom: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  },
  butttom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    width: "40px",
  },
  buttomActive: {
    background: "blue",
  },
});

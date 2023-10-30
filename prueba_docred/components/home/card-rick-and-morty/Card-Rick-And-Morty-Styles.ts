import { createUseStyles } from "react-jss";
//Estilos usados en las cards de Rick And Morty
export const cardRickMortyStyles = createUseStyles({
  mainCardRickMorty: {
    border: "1px solid grey",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    height: "340px",
    cursor: "pointer",
    width: "230px",
    overflow: "hidden",
  },
  imageCardRickMorty: {
    height: "210px",
    width: "230px",
    borderRadius: "8px 0px 0px 8px",
  },
  infoCardRickMorty: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "10px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
  },
});

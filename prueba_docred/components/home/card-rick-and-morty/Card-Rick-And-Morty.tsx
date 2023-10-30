import { cardRickMortyStyles } from "./Card-Rick-And-Morty-Styles";
import { InfoCardRickAndMorty } from "./Card-Rick-And-Morty-Types";
// Se define el tipo de datos llamado CardRickMortyTypes, que contiene dos propiedades que son esperadas por el componente CardRickMorty
type CardRickMortyTypes = {
  onClick: () => void;
  info: InfoCardRickAndMorty;
};
//Componente CardRickMorty que llama dos propiedades, info que traera las propiedades de los personajes que se representarán en las cards y la función Onclick
const CardRickMorty = ({ info, onClick }: CardRickMortyTypes) => {
  const styles = cardRickMortyStyles();
  return (
    //Se define el contenido de la card, sus estilos y propiedades
    <div onClick={onClick} className={styles.mainCardRickMorty}>
      <img
        className={styles.imageCardRickMorty}
        src={info.image}
        alt={`${info.name}`}
      />
      <div className={styles.infoCardRickMorty}>
        <span className={styles.name}>{info.name}</span>
        <span>{info.status}</span>
        <span>{info.gender}</span>
        <span>{info.type}</span>
      </div>
    </div>
  );
};

export default CardRickMorty;

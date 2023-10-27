import { cardRickMortyStyles } from "./Card-Rick-And-Morty-Styles";
import { InfoCardRickAndMorty } from "./Card-Rick-And-Morty-Types";

type CardRickMortyTypes = {
  onClick: () => void;
  info: InfoCardRickAndMorty;
};
const CardRickMorty = ({ info, onClick }: CardRickMortyTypes) => {
  const styles = cardRickMortyStyles();
  return (
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

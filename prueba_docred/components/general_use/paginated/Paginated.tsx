import { paginatedStyles } from "./Paginated-Styles";
//importación de iconos Material UI
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// Se define el tipo de datos llamado PaginatedTypes, que contiene dos propiedades currentPage, qe define la página actual y setCurrentPage que se usa para cambiar la página y que recibe recibe como paramentro un numero page
type PaginatedTypes = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
//Se pasan dos propiedades al componente Paginated del tipo PaginatedTypes, que son currentPage y setcurrentPage que se encargarán de manejar el paginado
const Paginated = ({ currentPage, setCurrentPage }: PaginatedTypes) => {
  const styles = paginatedStyles();
  return (
    <div className={styles.mainContainerButtom}>
      <button
        //Si al presionar el boton el valor de currentPage es mayor a 1, se le restara 1 al valor de esta
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
        className={styles.butttom}
        disabled={currentPage === 1}
      >
        <KeyboardDoubleArrowLeftIcon />
      </button>
      {[...Array(4)].map((buttom: number, index: number) => {
        return (
          <button
            onClick={() => {
              setCurrentPage(index + 1);
            }}
            //Dependiendo el valor de currentPage se tomaran los estilos de buttomActive que hara que el botón con el número de la página tome un valor azul
            className={`${styles.butttom} ${
              index + 1 === currentPage ? styles.buttomActive : ""
            }`}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        //Si currentPage es menor a 4, entonces se le sumará 1 a su valor
        onClick={() => {
          if (currentPage < 4) setCurrentPage(currentPage + 1);
        }}
        className={styles.butttom}
        disabled={currentPage === 4}
      >
        <KeyboardDoubleArrowRightIcon />
      </button>
    </div>
  );
};

export default Paginated;

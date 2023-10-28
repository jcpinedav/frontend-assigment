import { paginatedStyles } from "./Paginated-Styles";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
type PaginatedTypes = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
const Paginated = ({ currentPage, setCurrentPage }: PaginatedTypes) => {
  const styles = paginatedStyles();
  return (
    <div className={styles.mainContainerButtom}>
      <button
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
            className={`${styles.butttom} ${
              index + 1 === currentPage ? styles.buttomActive : ""
            }`}
          >
            {index + 1}
          </button>
        );
      })}
      <button
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

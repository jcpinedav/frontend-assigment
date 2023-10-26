import ButtomNavbar from "../buttom-navbar/Buttom-Navbar";
import { navbarStyles } from "./Navbar-Styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SchoolIcon from "@mui/icons-material/School";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const Navbar = ({}) => {
  const styles = navbarStyles();
  return (
    <div className={styles.mainNavbar}>
      <div className={styles.internalNavbar}>
        <img
          className={styles.imgLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png"
          alt=""
        />
        <div className={styles.containerButtomsNavbar}>
          <ButtomNavbar
            icon={<MedicalInformationIcon />}
            title="Contenido médico"
          />
          <ButtomNavbar icon={<SchoolIcon />} title="DocRed Académico" />
          <ButtomNavbar icon={<DateRangeIcon />} title="Eventos" />
          <ButtomNavbar icon={<ApartmentIcon />} title="Canales" />
          <ButtomNavbar icon={<PersonPinIcon />} title="Para usted" />
        </div>
        <div
          className={`${styles.containerButtomsNavbar} ${styles.containerIconsNavbar}`}
        >
          <SearchIcon />
          <NotificationsIcon />
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

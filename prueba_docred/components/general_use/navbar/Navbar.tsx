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
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = ({}) => {
  const styles = navbarStyles();
  //Se define un estado para cambiar el valor de menuState, el cual cuando dea true se tomaran los estilos containerButtomsResponsiveNavbarShow, para hacer mas amigable la interfaz en dispositivos móviles
  const [menuState, setMenuState] = useState(false);

  const menufunction = () => {
    setMenuState(!menuState);
  };

  return (
    <div className={styles.mainNavbar}>
      <div className={styles.internalNavbar}>
        <img
          className={styles.imgEEogo}
          src="https://res.cloudinary.com/docred/image/upload/v1689282496/logo_eccw7n.webp"
          alt=""
        />
        <div className={styles.containerButtomsNavbar}>
          <ButtomNavbar
            icon={<MedicalInformationIcon />}
            title="Contenido médico"
          />
          {/* uso de iconos de Material UI */}
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
          <button onClick={menufunction} className={styles.menuNavbar}>
            <MenuIcon />
          </button>
        </div>
      </div>
      <div
        className={`${styles.containerButtomsResponsiveNavbar} ${
          menuState === true ? styles.containerButtomsResponsiveNavbarShow : ""
        }`}
      >
        <ButtomNavbar
          icon={<MedicalInformationIcon />}
          title="Contenido médico"
        />
        <ButtomNavbar icon={<SchoolIcon />} title="DocRed Académico" />
        <ButtomNavbar icon={<DateRangeIcon />} title="Eventos" />
        <ButtomNavbar icon={<ApartmentIcon />} title="Canales" />
        <ButtomNavbar icon={<PersonPinIcon />} title="Para usted" />
      </div>
    </div>
  );
};

export default Navbar;

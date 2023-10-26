import { ReactNode } from "react";
import { buttomNavbarStyles } from "./Buttom-Navbar-Styles";
type ButtomNavbarTypes = {
  title: string;
  icon: ReactNode | ReactNode[];
};

const ButtomNavbar = ({ title, icon }: ButtomNavbarTypes) => {
  const styles = buttomNavbarStyles();
  return (
    <button className={styles.mainButtomNavbar}>
      {icon}
      <h4>{title}</h4>
    </button>
  );
};

export default ButtomNavbar;

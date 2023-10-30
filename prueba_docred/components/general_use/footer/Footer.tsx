import { footerStyles } from "./Footer-Styles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//Este componente contiene todas todas propiedades mostradas en el pie de página
const Footer = ({}) => {
  const styles = footerStyles();
  return (
    <div className={styles.mainFooterStyles}>
      <div className={styles.internalFooterStyles}>
        <span>DocRed 2022 Todos los derechos reservados</span>
        <div className={styles.containerIconStyles}>
          <FacebookOutlinedIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
        <div className={styles.textFooterStyles}>
          <span>Preguntas frecuentes</span>
          <span>|</span>
          <span>Términos y condiciones</span>
          <span>|</span>
          <span>Políticas de privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { QUERY_CHARATERS, QUERY_EPISODES } from "@/api/QueriesRickAndMorty";
import Footer from "@/components/general_use/footer/Footer";
import Navbar from "@/components/general_use/navbar/Navbar";
import Paginated from "@/components/general_use/paginated/Paginated";
import { homeStyles } from "@/components/home/Home-Styles";
import CardRickMorty from "@/components/home/card-rick-and-morty/Card-Rick-And-Morty";
import { InfoCardRickAndMorty } from "@/components/home/card-rick-and-morty/Card-Rick-And-Morty-Types";
import { useQuery } from "@/node_modules/@apollo/client/index";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//importación librería date-fns para manejo de fecha y formatos
import { format } from "date-fns";

const Home = () => {
  const styles = homeStyles();
  const router = useRouter();
  const currentDate = new Date();
  //se usa la fecha actual
  const formatoFecha = format(currentDate, "dd/MM/yyyy");
  //Se usa la función useState manejar y gesionar los estados del paginado
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery(QUERY_EPISODES, {
    variables: { ids: [1, 2] },
  });
  // Se usa el hook useQuery de Apollo para la ejecusión de la función, se trae la información en data, con un apodo Characters, y se usa el refech para ejecutar de nuevo la query con el valor que toma la variable
  const { data: characters, refetch } = useQuery(QUERY_CHARATERS, {
    variables: { page: currentPage },
  });
  //Declaración de la función handleNavigate para entrar a la página details
  const handleNavigate = () => {
    router.push("/details");
  };

  // console.log(characters?.characters?.results);
  useEffect(() => {
    refetch();
  }, [currentPage]);
  return (
    <div className={styles.mainContaincerHome}>
      {/* Se llama al componente Navbar */}
      <Navbar />
      <div className={styles.externalMainData}>
        <div className={styles.mainDate}>
          <span>Fecha actual:{formatoFecha}</span>
        </div>
      </div>
      <div className={styles.mainContainerCards}>
        {/* Se hace uso de una expresion de mapeo para acceder a la información del api, se us el operador '?' para evitar errores si una de las propiedades no existe */}
        {characters?.characters?.results?.map(
          // se llama al tipo InfoCardRickAndMorty, que define las propiades a usar en la card
          (character: InfoCardRickAndMorty, index: number) => {
            return (
              <CardRickMorty
                //Cuando se haga click en cualquier card se ejecutara la función handleNavigate que direccionará a la página details
                onClick={handleNavigate}
                info={character}
                key={`key-card-rick-morty-${index}`}
              />
            );
          }
        )}
      </div>
      {/* se llama al componente Paginated el cual tiene dos propiedades currentPage, setCurrentPage, siendo la priemra el valor de la página y la segunda una función que actualiza dicho valor */}
      <Paginated currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Se llama al componente Footer */}
      <Footer />
    </div>
  );
};

export default Home;

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

const Home = () => {
  const styles = homeStyles();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery(QUERY_EPISODES, {
    variables: { ids: [1, 2] },
  });

  const { data: characters, refetch } = useQuery(QUERY_CHARATERS, {
    variables: { page: currentPage },
  });
  const handleNavigate = () => {
    router.push("/details");
  };

  // console.log(characters?.characters?.results);
  useEffect(() => {
    refetch();
  }, [currentPage]);
  return (
    <div className={styles.mainContaincerHome}>
      <Navbar />
      <div className={styles.mainContainerCards}>
        {characters?.characters?.results?.map(
          (character: InfoCardRickAndMorty, index: number) => {
            return (
              <CardRickMorty
                onClick={handleNavigate}
                info={character}
                key={`key-card-rick-morty-${index}`}
              />
            );
          }
        )}
      </div>
      <Paginated currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
};

export default Home;

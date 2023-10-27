import { QUERY_CHARATERS, QUERY_EPISODES } from "@/api/QueriesRickAndMorty";
import Navbar from "@/components/general_use/navbar/Navbar";
import { homeStyles } from "@/components/home/Home-Styles";
import CardRickMorty from "@/components/home/card-rick-and-morty/Card-Rick-And-Morty";
import { InfoCardRickAndMorty } from "@/components/home/card-rick-and-morty/Card-Rick-And-Morty-Types";
import { useQuery } from "@/node_modules/@apollo/client/index";
import { useRouter } from "next/router";

const Home = () => {
  const styles = homeStyles();
  const router = useRouter();
  const { data } = useQuery(QUERY_EPISODES, {
    variables: { ids: [1, 2] },
  });

  const { data: characters } = useQuery(QUERY_CHARATERS, {
    variables: { page: 2 },
  });
  const handleNavigate = () => {
    router.push("/details");
  };

  console.log(characters?.characters?.results);
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
    </div>
  );
};

export default Home;

import { QUERY_CHARATERS, QUERY_EPISODES } from "@/api/QueriesRickAndMorty";
import Navbar from "@/components/general_use/navbar/Navbar";
import CardRickMorty from "@/components/home/card-rick-and-morty/Card-Rick-And-Morty";
import { useQuery } from "@/node_modules/@apollo/client/index";
import { Height } from "@mui/icons-material";

const Home = () => {
  // const { data } = useQuery(QUERY_EPISODES, {
  //   variables: { ids: [1, 2] },
  // });

  // const { data: characters } = useQuery(QUERY_CHARATERS, {
  //   variables: { page: 2 },
  // });

  // console.log(characters);
  return (
    <div style={{ height: "2000px" }}>
      <Navbar />
      <CardRickMorty />
    </div>
  );
};

export default Home;

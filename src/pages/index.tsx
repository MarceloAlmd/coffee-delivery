import * as Styles from "./styles";
import coffee from "../assets/coffee.svg";
import { Header } from "../components/header";

export function Home() {
  return (
    <Styles.Container>
      <Header />
      <Styles.Banner />
      <Styles.ContentBanner>
        <Styles.Adverts>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </Styles.Adverts>

        <img src={coffee} alt="coffee" />
      </Styles.ContentBanner>
    </Styles.Container>
  );
}

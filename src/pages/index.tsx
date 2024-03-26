import * as Styles from "./styles";

import { Header } from "../components/header";

export function Home() {
  return (
    <Styles.Container>
      <Header />
      <Styles.Banner></Styles.Banner>
    </Styles.Container>
  );
}

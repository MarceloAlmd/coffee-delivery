import * as Styles from "./styles";
import coffee from "../assets/coffee.svg";
import { Header } from "../components/header";
import { CoffeeDescription } from "../components/coffeeDescription";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

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

          <Styles.Description>
            <CoffeeDescription
              icon={ShoppingCart}
              text="Compra simples e segura"
              bgColor="darkYellow"
            />

            <CoffeeDescription
              icon={Package}
              text="Embalagem mantém o café intacto"
              bgColor="gray"
            />

            <CoffeeDescription
              icon={Timer}
              text="Entrega rápida e rastreada"
              bgColor="yellow"
            />
            <CoffeeDescription
              icon={Coffee}
              text="O café chega fresquinho até você"
              bgColor="purple"
            />
          </Styles.Description>
        </Styles.Adverts>

        <img src={coffee} alt="coffee" />
      </Styles.ContentBanner>
    </Styles.Container>
  );
}

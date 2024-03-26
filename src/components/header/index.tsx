import * as Styles from "./styles";
import logo from "./../../assets/logoCoffeeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <Styles.HeaderContainer>
      <img src={logo} alt="logo" />

      <Styles.SessionAddressAndCart>
        <button type="button" className="address">
          <MapPin size={23} weight="fill" />
          Porto Alegre, RS
        </button>
        <button type="button" className="cart">
          <ShoppingCart size={23} weight="fill" />
        </button>
      </Styles.SessionAddressAndCart>
    </Styles.HeaderContainer>
  );
}

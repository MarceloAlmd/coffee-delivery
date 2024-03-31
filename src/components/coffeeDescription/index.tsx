import * as Styles from "./styles";
import { CoffeeDescriptionProps } from "./type";

export function CoffeeDescription({
  text,
  icon: Icon,
  bgColor,
}: CoffeeDescriptionProps) {
  return (
    <Styles.Container bgColor={bgColor}>
      <div className="iconContent">
        <Icon size={20} weight="fill" />
      </div>

      <span>{text}</span>
    </Styles.Container>
  );
}

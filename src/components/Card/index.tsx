import Container from "./style";
import { Beer } from "@types";

const Card = ({ img, title, description }: Beer) => (
  <Container>
    <picture>
      <img src={img} alt={title} height="100" />
    </picture>
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  </Container>
);

export default Card;

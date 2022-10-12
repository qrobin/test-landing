
import { StyledCard } from "./styled";

function Card(props) {
  const { children } = props;
  return <StyledCard>{children}</StyledCard>;
}

export { Card }
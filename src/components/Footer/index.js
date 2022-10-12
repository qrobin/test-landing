import { StyledFooter } from "./styled";
import { Button } from "../Button";

function Footer() {
  return (
    <StyledFooter>
      <p>Footer</p>
      <Button variant="primary" fullWidth title="Primary" />
      <Button variant="secondary" title="Secondary" />
    </StyledFooter>
  )
}

export { Footer }
import { StyledButton } from "./styled";

function Button(props) {
  const { title, variant, handleCLick } = props;
  return (
    <StyledButton
      variant={variant}
      onClick={handleCLick}>
      {title}
    </StyledButton>
  )
}

export { Button }
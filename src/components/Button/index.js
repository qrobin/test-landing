import { StyledButton } from "./styled";

function Button(props) {
  const { title, handleCLick } = props;
  return (
    <StyledButton onClick={handleCLick}>{title}</StyledButton>
  )
}

export { Button }
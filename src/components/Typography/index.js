import { StyledText } from "./styled";

function Text({ type, children }) {
  return <StyledText type={type}>{children}</StyledText>;
}

export { Text };


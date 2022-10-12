import styled from "styled-components";
import theme from "../../theme";

const getButtonStyle = (props) => {
  const { variant = "primary" } = props;
  return theme.buttons[variant];
};

export const StyledButton = styled('button')`
  ${getButtonStyle}

  @media (max-width: 768px) {
    padding: 49px 150px; // TODO: add media queries
  }
`
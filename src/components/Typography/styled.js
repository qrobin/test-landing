import styled from "styled-components";
import theme from "../..//theme";

const StyledText = styled(({ type, ...rest }) => <p {...rest} />)`
  ${({ type }) => {
    switch (type) {
      case "h1": {
        return `
          font-size: ${theme.typography.h1.fontSize};
        `;
      }
      default: {
        return `
          font-size: ${theme.typography.h1.fontSize};
        `;
      }
    }
  }};
  `;

export { StyledText }
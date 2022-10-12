import { css } from "styled-components";
import { palette } from "./palette";

const baseStyles = css`
  padding: 20px 32px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  width: ${p => (p.fullWidth ? "100%" : "auto")};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${palette.primary}; // TODO: add hover styles
  }
`;

export const buttons = {
  primary: css`
    ${baseStyles}
    background-color: ${palette.blue};
    color: ${palette.white};
  `,
  secondary: css`
    ${baseStyles}
    background-color: ${palette.white};
    color: ${palette.blue};
  `,
}
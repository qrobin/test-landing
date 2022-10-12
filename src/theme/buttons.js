import { css } from "styled-components";
import { palette } from "./palette";

export const buttons = {
  primary: css`
        background-color: ${palette.blue};
        color: ${palette.white};
      `,
  secondary: css`
        background-color: ${palette.white};
        color: ${palette.blue};
      `,
}
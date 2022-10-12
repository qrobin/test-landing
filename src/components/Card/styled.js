import styled from "styled-components";

export const StyledCard = styled.div`
  background: ${p => p.background};
  border-radius: 24px;
  padding: 24px;
  margin: 24px;
  height: ${p => p.height || "auto"};
`
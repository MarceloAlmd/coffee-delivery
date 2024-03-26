import styled from "styled-components";
import banner from "./../assets/bannerBackground.svg";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 544px auto;

  grid-template-areas: "header" "banner" "main";
`;

export const Banner = styled.div`
  width: 100%;

  grid-area: banner;

  background: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;

  margin: 0 auto;

  filter: blur(50px);
`;

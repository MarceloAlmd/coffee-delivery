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

  z-index: -1;
`;

export const ContentBanner = styled.div`
  grid-area: banner;
  max-width: 90rem;
  width: 100%;

  margin: 0 auto;

  z-index: 9999;

  display: flex;

  > img {
    margin-top: 7.813rem;
  }
`;

export const Adverts = styled.div`
  width: 100%;
  margin-top: 7.813rem;

  > h1 {
    max-width: 39rem;
    font-family: "Baloo 2", sans-serif;
    font-size: ${(props) => props.theme.typography.font.baloo.sizes.titleXL};
    line-height: ${(props) => props.theme.typography.font.baloo.lineHeight};
  }

  > span {
    font-family: "Roboto", sans-serif;
    font-size: ${(props) => props.theme.typography.font.roboto.sizes.textL};
    line-height: ${(props) =>
      props.theme.typography.font.roboto.lineHeight.small};
    color: ${(props) => props.theme.base.subtitle};
    display: inline-block;
    max-width: 35rem;

    margin-top: 1rem;
  }
`;

export const Description = styled.div`
  max-width: 36rem;

  margin-top: 4.375rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  row-gap: 1.563rem;
`;

import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 90rem;
  width: 100%;

  padding: 2rem 0.5rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-area: header;
`;

export const SessionAddressAndCart = styled.div`
  display: flex;
  gap: 0.75rem;

  .address {
    border: none;
    background: ${(props) => props.theme.product.purpleLight};
    color: ${(props) => props.theme.product.purpleDark};
    border-radius: 6px;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: background-color 0.5s, color 0.5s;

    &:hover {
      background: ${(props) => props.theme.product.purple};
      color: ${(props) => props.theme.product.purpleLight};
    }
  }

  .cart {
    border: none;
    background: ${(props) => props.theme.product.yellowLight};
    color: ${(props) => props.theme.product.yellowDark};
    border-radius: 6px;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: background-color 0.5s, color 0.5s;

    &:hover {
      background: ${(props) => props.theme.product.yellowDark};
      color: ${(props) => props.theme.product.yellowLight};
    }
  }
`;

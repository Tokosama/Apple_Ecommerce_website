/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;

  margin: 0;
`;
const TitleWrapper=styled.div`
  height: 40px;
  

`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;
const PriceRow = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  @media screen and (min-width: 840px) {
    display: flex;
    gap: 5px;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-align: right;
  @media screen and (min-width: 840px) {
  text-align: left;

  font-size: 1.1rem;

  }
`;
export default function ProductBox({ _id, title, description, price, images }) {
  const url = "/product/" + _id;
  const { addProduct } = useContext(CartContext);
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]} />
        </div>
      </WhiteBox>
      <ProductInfoBox>
      <TitleWrapper>
          <Title href={url}>{title}</Title>

          </TitleWrapper>

        <PriceRow>
          <Price>${price}</Price>
          <div>
            <Button
              primary
              block
              outline
              onClick={() => addProduct(_id)}
            >
              Add to cart
            </Button>{" "}
          </div>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}

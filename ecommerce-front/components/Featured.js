/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
  font-size: 2.5rem;

  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: large.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  gap: 40px;
  div:nth-child(1){
    order:2;
  }
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
   grid-template-columns: 1.1fr 0.9fr;
   img {
    max-width: 100%;
  }
   div:nth-child(1){
    order:0;
  }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;
export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product?.title}</Title>
              <Desc>{product?.description} </Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={"/product/" + product?._id}
                  outline={1}
                  white={1}
                >
                  Read More
                </ButtonLink>
                <Button
                  white
                  href={""}
                  onClick={addFeaturedToCart}
                >
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src={product.images[0]} />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}

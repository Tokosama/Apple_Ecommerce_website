import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";
import { useEffect, useState } from "react";


const Title = styled.h2`
font-size:2rem;
margin:30px 0 20px;
font-weight: normal;
`;

export default function NewProducts({ products }) {
   const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    setRandomProducts(
      [...products].sort(() => 0.5 - Math.random()).slice(0, 4)
    );
  }, [products]);

  return (
    <Center>
        <Title>New Arrival</Title>
        <ProductsGrid  products={randomProducts} />

      
    </Center>
  );
}

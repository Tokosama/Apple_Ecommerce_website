import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr  ;
  gap: 40px 20px;
  @media screen and (min-width: 768px) {
  grid-template-columns: 1fr 1fr 1fr 1fr;
margin-bottom: 50px;
  }
  
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          // eslint-disable-next-line react/jsx-key
          <ProductBox key={product._id} {...product} />
        ))}
    </StyledProductsGrid>
  );
}

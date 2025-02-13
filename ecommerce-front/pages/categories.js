import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";



export default function Categories({products}) {
  return (
    <>
      <Header />
      <Center>
        <Title>Upcoming.......</Title>
      </Center>
    </>
  );
}


//Cest pour pouvoir recuper les elements de la bases de donnees
export async function getServerSideProps(){
    await mongooseConnect();
    const products = await Product.find({},null, {sort:{'_id':-1}});

    return {props:{
            products: JSON.parse(JSON.stringify(products)),
    }}
}
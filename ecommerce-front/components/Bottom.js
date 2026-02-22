import React from "react";
import styled from "styled-components";
import Center from "./Center";
import { Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Bg = styled.footer`
  background: #222;
  color: #ddd;
  padding: 60px 0 40px;
  font-size: 14px;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  gap: 40px;
  text-align: center;

  @media (min-width: 816px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: normal;
  font-size: 1.7rem;
  @media screen and (min-width: 816px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  line-height: 1.6;
  color: #aaa;
  max-width: 400px;
  font-size: 0.8rem;
  @media screen and (min-width: 816px) {
    font-size: 1.1rem;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;

  @media (min-width: 816px) {
    justify-content: flex-start;
  }

  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: all 0.25s ease;
    color: #aaa;

    &:hover {
      color: #fff;
      transform: translateY(-3px) scale(1.1);
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #333;
  text-align: center;
  font-size: 13px;
  color: #777;
`;

export default function Bottom() {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <Title>Find Me</Title>
            <Socials>
              <Link
                href="https://toko-sama-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </Link>
              <Link
                href="https://toko-sama-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </Link>
            </Socials>
          </Column>

          <Column>
            <Title>About</Title>
            <Description>
              This website showcases my skills through a demo ecommerce project.
              All payments are made using Stripe test mode. Visit my portfolio
              to see more projects.
            </Description>
          </Column>
        </ColumnsWrapper>

        <BottomBar>
          © {new Date().getFullYear()} — Built with Next.js & Styled Components
        </BottomBar>
      </Center>
    </Bg>
  );
}

import React from 'react';
import styled from '@emotion/styled';
import CenterColumnWrap from './CenterColumnWrap';
import CenterColumn from './CenterColumn';
import { layout } from "styled-system";
import { flexbox } from "../styleFunctions";


const HERO_HEIGHT = 500;
// const HERO_LINE_GUTTER_V = 500;

const HeroContainer = styled.div`
  width: 100vw;
  height: ${props => props.height}px;
  height: 100vh;
  max-height: 80vh;
  background-image: url(${props => props.imageSrc});
  background-position: left top;
  background-size: cover;
`
const HeroColumns = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
const HeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
  color: white;
`

const HeroLine = styled.div`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.xxlarge}px;
  }
  `

const Heading = styled.div`
  font-family: ${props => props.theme.fontFamilies.heading};
  font-weight: 500;
  line-height: 1.2;
`;
const HeroHeading = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[6]}px;
`

const Hero = props => {
  return (
    <HeroContainer imageSrc={props.imageSrc} height={HERO_HEIGHT}>
      <CenterColumnWrap height="100%">
        <CenterColumn height="100%">
          <HeroColumns>
            <HeroColumn>
              <HeroLine>
                <HeroHeading as="h2">Nearly 40% of global mercury pollution comes from artisanal gold mining.</HeroHeading>
              </HeroLine>
              <HeroLine>
                <HeroHeading as="h2">Together, we can bring it down to zero.</HeroHeading>
              </HeroLine>
            </HeroColumn>
          </HeroColumns>
        </CenterColumn>
      </CenterColumnWrap>
    </HeroContainer>
  )
}

export default Hero;
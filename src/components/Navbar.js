import React from 'react';
import Color from 'color';
// import { Link } from 'gatsby';
import Link, { makeLinkColors } from './Link';
import styled from '@emotion/styled';
import Inline from './Inline';
import InlineItem from './InlineItem';
import InlineSplit from './InlineSplit';
// import theme from '../theme';
// import logo from '../img/logo.svg';

const NAVBAR_HEIGHT = 60;
const NAVBAR_LOGO_HEIGHT = 40;

const CenterColumnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: ${props => props.theme.layout.centerColumn.outerGutter}px;
  padding-right: ${props => props.theme.layout.centerColumn.outerGutter}px;
`;

const CenterColumn = styled.div`
  flex: 1;
  max-width: ${props => props.theme.layout.centerColumn.maxWidth}px;
`;

const NavbarOuter = styled.div`
  display: flex;
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${props => props.theme.colors.headerBG};
`;

const Logo = styled.img`
  height: ${NAVBAR_LOGO_HEIGHT}px;
  width: auto;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const NavbarCenterColumnWrap = styled(CenterColumnWrap)`
  flex: 1;
  max-height: 100%;
`;
const NavbarCenterColumn = styled(CenterColumn)`
  display: flex;
  max-height: 100%;
`;
const NavbarInline = styled(Inline)`
  max-height: 100%;
`;
const NavbarInlineSplit = styled(Inline)`
  flex: 1;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
`;
const NavbarInlineItem = styled(InlineItem)`
  display: flex;
  max-height: 100%;
`;
const NavbarInlineLink = styled(Link)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .03em;
  text-transform: uppercase;
  /* color: ${props => props.theme.colors.text}; */
  /* color: ${props => makeLinkColors(props.theme.colors.text)}; */
`;
NavbarInlineLink.defaultProps = {
  color: "text"
}

const Navbar = props => {
  return (
  <NavbarOuter>
    <NavbarCenterColumnWrap>
      <NavbarCenterColumn>
        <NavbarInlineSplit gutter={24}>
          <NavbarInlineItem gutter={24} to="/" as={Link}>
            <LogoContainer>
              <Logo src="/img/header-logo.png" alt="Mercury Free Mining" />
            </LogoContainer>
          </NavbarInlineItem>
          <NavbarInlineItem style={{ display: 'flex' }}>
            <NavbarInline gutter={24}>
              <NavbarInlineItem gutter={24}>
                <NavbarInlineLink to="/products">Products</NavbarInlineLink>
              </NavbarInlineItem>
              <NavbarInlineItem gutter={24}>
                <NavbarInlineLink to="/blog">Blog</NavbarInlineLink>
              </NavbarInlineItem>
              <NavbarInlineItem gutter={24}>
                <NavbarInlineLink to="/contact">Contact</NavbarInlineLink>
              </NavbarInlineItem>
            </NavbarInline>
          </NavbarInlineItem>
        </NavbarInlineSplit>
      </NavbarCenterColumn>
    </NavbarCenterColumnWrap>
  </NavbarOuter>
)};

export default Navbar;

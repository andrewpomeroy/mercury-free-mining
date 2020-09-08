import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
// import logo from '../img/logo.svg';

const theme = {
  colors: {
    headerBG: 'white',
  },
};

const layoutTokens = {
  centerColumn: {
    maxWidth: 1200,
    outerGutter: 20,
  },
};

const NAVBAR_HEIGHT = 50;

const CenterColumnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: ${layoutTokens.centerColumn.outerGutter}px;
  padding-right: ${layoutTokens.centerColumn.outerGutter}px;
`;

const CenterColumn = styled.div`
  flex: 1;
  max-width: ${layoutTokens.centerColumn.maxWidth}px;
`;

const NavbarOuter = styled.div`
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${theme.colors.headerBG};
`;

const INLINE_GUTTER = 16;

const Inline = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -${INLINE_GUTTER / 2}px;
  margin-right: -${INLINE_GUTTER / 2}px;
`;

const InlineSplit = styled(Inline)`
  justify-content: space-between;
`;

const InlineItem = styled.div`
  &:not(:first-child) {
    padding-left: ${INLINE_GUTTER / 2}px;
  }
  &:not(:last-child) {
    padding-right: ${INLINE_GUTTER / 2}px;
  }
`;

const Logo = styled.img`
  max-height: 100%;
  width: auto;
`;

const NavbarCenterColumnWrap = styled(CenterColumnWrap)`
  max-height: 100%;
`;
const NavbarCenterColumn = styled(CenterColumn)`
  max-height: 100%;
`;
const NavbarInline = styled(Inline)`
  max-height: 100%;
`;
const NavbarInlineSplit = styled(InlineSplit)`
  max-height: 100%;
  max-width: 100%;
`;
const NavbarInlineItem = styled(InlineItem)`
  display: flex;
  max-height: 100%;
`;
const NavbarInlineLink = styled(Link)`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const Navbar = props => (
  <NavbarOuter>
    <NavbarCenterColumnWrap>
      <NavbarCenterColumn>
        <NavbarInlineSplit>
          <NavbarInlineItem as={Link}>
            <Logo src="/img/header-logo.png" alt="Mercury Free Mining" />
          </NavbarInlineItem>
          <NavbarInlineItem style={{ display: 'flex' }}>
            <NavbarInline>
              <NavbarInlineItem>
                <NavbarInlineLink to="/">Item 1</NavbarInlineLink>
              </NavbarInlineItem>
              <NavbarInlineItem>
                <NavbarInlineLink to="/products">Products</NavbarInlineLink>
              </NavbarInlineItem>
              <NavbarInlineItem>
                <NavbarInlineLink to="/blog">Blog</NavbarInlineLink>
              </NavbarInlineItem>
              <NavbarInlineItem>
                <NavbarInlineLink to="/contact">Contact</NavbarInlineLink>
              </NavbarInlineItem>
            </NavbarInline>
          </NavbarInlineItem>
        </NavbarInlineSplit>
      </NavbarCenterColumn>
    </NavbarCenterColumnWrap>
  </NavbarOuter>
);

export default Navbar;

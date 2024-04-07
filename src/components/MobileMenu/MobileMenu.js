/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={24} />
        </CloseButton>
        <MobileNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MobileNav>
        <FooterWrapper>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </FooterWrapper>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
`;

const Content = styled(DialogContent)`
  position: relative;
  width: 300px;
  height: 100%;
  margin-left: auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.white};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 16px;
  cursor: pointer;
  background: transparent;
  border: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  line-height: 21.13px;
  text-align: left;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  :hover {
    color: ${COLORS.secondary};
  }
`;
const FooterWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.44px;
  text-align: left;
  text-decoration: none;
  color: ${COLORS.gray[700]};
`;
export default MobileMenu;

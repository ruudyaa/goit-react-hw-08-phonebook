import React from 'react';
import { FooterBlock } from './Footer.styled';

const Footer = () => {
  return (
    <FooterBlock>
      <p>Created by &copy; Marta Rudnytska {new Date().getFullYear()}</p>
    </FooterBlock>
  );
};

export default Footer;

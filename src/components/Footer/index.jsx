import React from 'react'
import {FooterContainer, ExternalLink} from './styles'

const Footer = () => (
  <FooterContainer>
    
    <ExternalLink
      href="https://github.com/JayAkbari"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Made by AJ
    </ExternalLink>
  </FooterContainer>
)

export default Footer

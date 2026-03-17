import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Container from './Container'

const FooterSection = styled.footer`
  background-color: var(--bg-secondary);
  padding: 40px 0;
  width: 100%;
  border-top: 1px solid var(--border-color);
  margin-top: 60px;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
`

const FooterText = styled(motion.p)`
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterText
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Design & Developed by Sai Manikanta
          </FooterText>
          <FooterText
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            © {currentYear}. All rights reserved.
          </FooterText>
        </FooterContent>
      </Container>
    </FooterSection>
  )
}

export default Footer

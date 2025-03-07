import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${props => props.scrolled ? 'var(--bg-primary)' : 'transparent'};
  transition: background 0.3s ease;
  padding: 20px 0;
  border-bottom: ${props => props.scrolled ? '1px solid var(--border-color)' : 'none'};
`

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.a)`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
`

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-right: 70px;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.a)`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-color);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--accent-color);
  }

  &:hover:after {
    width: 100%;
  }
`

const MobileMenuButton = styled(motion.button)`
  display: none;
  color: var(--text-primary);
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  padding: 20px;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home">SM</Logo>
        <NavContent>
          <NavLinks>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinks>
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      <MobileMenu
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </MobileMenu>
    </Nav>
  )
}

export default Navbar 
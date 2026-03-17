import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaFileDownload, FaSun, FaMoon } from 'react-icons/fa'
import resumePDF from '../assets/myresume.pdf'
import Container from './Container'
import { useTheme } from '../context/ThemeContext'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-primary);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 0;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 12px 0;
  }
`

const Logo = styled(motion.a)`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const ThemeToggleButton = styled(motion.button)`
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: var(--bg-secondary);
    transform: translateY(-2px);
  }
`

const ResumeButton = styled(motion.a)`
  padding: 8px 16px;
  background: var(--text-primary);
  color: var(--bg-primary);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--text-primary);
    transform: translateY(-2px);
    color: white;
  }
`

const DesktopResumeButton = styled(ResumeButton)`
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.a)`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
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
  const { isDarkMode, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Nav>
      <Container>
        <NavContent>
          <Logo href="#home">SM</Logo>
          <NavLinks>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <ThemeToggleButton
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </ThemeToggleButton>
            <DesktopResumeButton
              href={resumePDF}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload /> Resume
            </DesktopResumeButton>
          </NavLinks>
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </MobileMenuButton>
        </NavContent>
      </Container>
      <MobileMenu
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <ThemeToggleButton
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ padding: '10px' }}
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </ThemeToggleButton>
          <ResumeButton
            href={resumePDF}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload /> Download Resume
          </ResumeButton>
        </div>
      </MobileMenu>
    </Nav>
  )
}

export default Navbar

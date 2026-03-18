import styled from '@emotion/styled'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaEnvelope } from 'react-icons/fa'
import resumePDF from '../assets/myresume.pdf'
import Container from './Container'

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--bg-primary);
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 60px;

  @media (max-width: 1200px) {
    padding: 100px 20px 50px;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 100px 16px 50px;
  }

  @media (max-width: 480px) {
    padding: 90px 14px 40px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--text-primary) 0%, transparent 50%);
    opacity: 0.05;
    pointer-events: none;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  max-width: 1400px;
  gap: 60px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;

  @media (max-width: 1200px) {
    gap: 50px;
    padding: 0 30px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    gap: 24px;
    padding: 0 16px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;

  @media (max-width: 1024px) {
    flex: 0 1 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`

const HeroImage = styled(motion.img)`
  width: 300px;
  height: 350px;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 280px;
    height: 320px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 280px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 220px;
    margin: 15px 0;
  }
`

const Greeting = styled(motion.h1)`
  font-size: 14px;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 12px;
  }
`

const Name = styled(motion.h2)`
  font-size: 56px;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.2;
  font-weight: 700;
  word-break: break-word;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`

const Title = styled(motion.h3)`
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.2;
  font-weight: 500;
  min-height: 24px;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 14px;
  }
`

const Description = styled(motion.p)`
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 32px;
  line-height: 1.7;
  text-align: left;
  word-break: break-word;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 28px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
    margin-bottom: 24px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    gap: 14px;
    margin-bottom: 30px;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin-bottom: 24px;
    flex-direction: column;
    width: 100%;
  }
`

const CTAButton = styled(motion.a)`
  padding: 12px 28px;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  
  &:hover {
    border-color: var(--text-primary);
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    padding: 11px 24px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 10px 18px;
    font-size: 12px;
    width: 100%;
  }
`

const SecondaryButton = styled(CTAButton)`
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
  
  &:hover {
    opacity: 0.8;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    gap: 18px;
  }

  @media (max-width: 768px) {
    gap: 16px;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 14px;
  }
`

const SocialIcon = styled(motion.button)`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 24px;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.6;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

const SocialLink = styled(motion.a)`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 24px;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.6;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 20px;
    font-size: 12px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

const ScrollLine = styled(motion.div)`
  width: 2px;
  height: 60px;
  background: var(--text-primary);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--text-primary);
    animation: scroll 2s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`

const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 50])

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  // Typing effect for title
  const titles = ['Full Stack Developer','Specializing in Web Dev and AI&ML']
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1))
          setTypingSpeed(100)
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1))
          setTypingSpeed(50)
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false)
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, titleIndex, typingSpeed, titles])

  return (
    <HeroSection id="home">
      <Container>
        <HeroContent>
          <TextContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Greeting>
                👋 Hi, I'm
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  👋
                </motion.span>
              </Greeting>
              <Name>Pasumarthi <br /> Sai Manikanta</Name>
              <Title>
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ display: 'inline-block', width: '3px', height: '60px', background: 'var(--text-primary)', marginLeft: '5px', verticalAlign: 'middle' }}
                />
              </Title>
              <Description>
   A third-year Computer Science Engineering student at KL University specializing in full-stack development with React.js and Spring Boot. Experienced in Java Full Stack and MERN Stack, building scalable applications and solving real-world problems. Also working in Machine Learning to create data-driven solutions, with strong expertise in Data Structures and clean architecture.
              </Description>
              <ButtonGroup>
                <SecondaryButton
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </SecondaryButton>
                <CTAButton
                  href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </CTAButton>
              <CTAButton
                href={resumePDF}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload /> Download Resume
              </CTAButton>
            </ButtonGroup>
          </motion.div>
          <SocialLinks>
          <SocialLink
            href="https://github.com/Saimanikanta540"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/pasumarthi-sai-manikanta-64510b301/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -3 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://x.com/saimanikanta540"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -3 }}
          >
            <FaTwitter />
          </SocialLink>
          <SocialIcon
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ y: -3 }}
          >
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
          </TextContent>
          <HeroImage
            src="/favicon.png"
            alt="Hero Avatar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </HeroContent>
      </Container>
      <ScrollIndicator
        onClick={scrollToAbout}
        style={{ opacity, y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Scroll Down
        <ScrollLine />
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero 
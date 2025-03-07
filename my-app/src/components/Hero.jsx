import styled from '@emotion/styled'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--bg-primary);
  min-height: 100vh;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--accent-color) 0%, transparent 50%);
    opacity: 0.1;
    pointer-events: none;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`

const Greeting = styled(motion.h1)`
  font-size: 16px;
  color: var(--accent-color);
  margin-bottom: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: '';
    width: 50px;
    height: 1px;
    background: var(--accent-color);
    opacity: 0.5;
  }
`

const Name = styled(motion.h2)`
  font-size: 80px;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.1;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

const Title = styled(motion.h3)`
  font-size: 80px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.1;
  font-weight: 600;
`

const Description = styled(motion.p)`
  font-size: 20px;
  color: var(--text-secondary);
  max-width: 540px;
  margin-bottom: 30px;
  line-height: 1.6;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--accent-color);
    opacity: 0.5;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`

const CTAButton = styled(motion.a)`
  padding: 15px 30px;
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(100, 255, 218, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: var(--accent-color);
    color: var(--bg-primary);
    
    &::before {
      left: 100%;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`

const SocialIcon = styled(motion.a)`
  color: var(--text-primary);
  font-size: 24px;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--accent-color);
    
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
`

const ScrollLine = styled(motion.div)`
  width: 2px;
  height: 60px;
  background: var(--accent-color);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent-color);
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

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroSection id="home">
      <HeroContent>
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
          <Title>Full Stack Developer</Title>
          <Description>
            I am a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science at KL University. 
            My expertise lies in developing scalable web applications using React for the frontend and Spring Boot for the backend.
          </Description>
          <ButtonGroup>
            <CTAButton
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </CTAButton>
            <CTAButton
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </CTAButton>
          </ButtonGroup>
        </motion.div>
        <SocialLinks>
          <SocialIcon
            href="https://github.com/Saimanikanta540"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/sai-manikanta-64510b301/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -3 }}
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://x.com/saimanikanta540"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -3 }}
          >
            <FaTwitter />
          </SocialIcon>
        </SocialLinks>
      </HeroContent>
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
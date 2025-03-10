import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NotFoundContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  overflow-x: hidden;
`

const ErrorCode = styled(motion.h1)`
  font-size: 120px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  position: relative;

  @media (max-width: 768px) {
    font-size: 80px;
  }
`

const ErrorMessage = styled(motion.h2)`
  font-size: 32px;
  margin: 20px 0;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Description = styled(motion.p)`
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const HomeButton = styled(motion.create(Link))`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: var(--accent-color);
  color: var(--bg-primary);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }
`

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorCode
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </ErrorCode>
      <ErrorMessage
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Page Not Found
      </ErrorMessage>
      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        The page you're looking for doesn't exist or has been moved. 
        Let's get you back to the home page.
      </Description>
      <HomeButton
        to="/"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaHome /> Back to Home
      </HomeButton>
    </NotFoundContainer>
  )
}

export default NotFound 
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import Container from './Container'

const EducationSection = styled.section`
  background-color: var(--bg-primary);
  padding: 80px 0;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 60px 0;
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 28px;
  color: var(--text-primary);
  margin-bottom: 48px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 36px;
  }
`

const EducationGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 50px;
  justify-content: center;
  gap: 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0;
    gap: 16px;
  }
`

const EducationCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--text-primary);
    box-shadow: 0 8px 24px var(--shadow-color);
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: var(--bg-secondary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 18px;
  flex-shrink: 0;
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`

const Subtitle = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
`

const DateRange = styled.span`
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: auto;
  padding-top: 8px;
`

const Education = () => {
  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: 'B.Tech in Computer Science Engineering',
      subtitle: 'KLEF Deemed to be University',
      date: '2023 – 2027',
      achievement: 'CGPA: 9.49/10'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Class XII - MPC',
      subtitle: 'Amaravathi Junior College',
      date: '2021 – 2023',
      achievement: 'Marks: 931/100'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Class X',
      subtitle: 'DR.KKR Gowtham School',
      date: '2019 – 2021',
      achievement: 'CGPA: 10/10'
    }
  ]

  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </SectionTitle>
        
        <EducationGrid>
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CardHeader>
                <IconWrapper>{edu.icon}</IconWrapper>
                <TitleGroup>
                  <Title>{edu.title}</Title>
                  <Subtitle>{edu.subtitle}</Subtitle>
                </TitleGroup>
              </CardHeader>
              <DateRange>{edu.date} • {edu.achievement}</DateRange>
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </EducationSection>
  )
}

export default Education

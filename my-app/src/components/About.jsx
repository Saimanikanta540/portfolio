import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTools, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si'

const AboutSection = styled.section`
  background-color: var(--bg-secondary);
  padding: 100px 0;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`

const SectionTitle = styled(motion.h2)`
  font-size: 32px;
  color: var(--text-primary);
  margin-bottom: 60px;
  text-align: center;
  font-weight: 700;
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const AboutText = styled(motion.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 20px;
`

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const CategoryTitle = styled.h3`
  font-size: 20px;
  color: var(--text-primary);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const SkillItem = styled(motion.div)`
  background: var(--card-bg);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
`

const CodingProfiles = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
`

const ProfilesTitle = styled.h3`
  font-size: 24px;
  color: var(--text-primary);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const ProfilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`

const ProfileCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
    box-shadow: 0 5px 15px var(--shadow-color);
  }
`

const ProfileIcon = styled.div`
  font-size: 24px;
  color: var(--accent-color);
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ProfileName = styled.span`
  font-weight: 500;
  color: var(--text-primary);
`

const ProfileHandle = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
`

const About = () => {
  const skills = {
    frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Context API'],
    backend: ['Spring Boot', 'Java', 'Node.js', 'Express.js', 'REST APIs'],
    database: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code', 'IntelliJ IDEA', 'Postman']
  }

  const codingProfiles = [
    {
      name: 'GitHub',
      handle: 'Saimanikanta540',
      icon: <FaGithub />,
      url: 'https://github.com/Saimanikanta540',
      color: '#333'
    },
    {
      name: 'LeetCode',
      handle: '2300031961',
      icon: <SiLeetcode />,
      url: 'https://leetcode.com/u/2300031961',
      color: '#FFA116'
    },
    {
      name: 'CodeChef',
      handle: 'klu_2300031961',
      icon: <SiCodechef />,
      url: 'https://www.codechef.com/users/klu_2300031961',
      color: '#5B4638'
    },
    {
      name: 'HackerRank',
      handle: 'h2300031961',
      icon: <SiHackerrank />,
      url: 'https://www.hackerrank.com/profile/h2300031961',
      color: '#2EC866'
    }
  ]

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        <AboutContent>
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I am a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science at KL University. 
            My journey in software development began with a curiosity for creating web applications that solve real-world problems.
          </AboutText>
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I specialize in building scalable web applications using modern technologies. 
            My expertise includes developing responsive user interfaces with React and creating robust backend services with Spring Boot.
          </AboutText>
          <SkillsGrid>
            <SkillCategory>
              <CategoryTitle>
                <FaCode /> Frontend
              </CategoryTitle>
              <SkillsList>
                {skills.frontend.map((skill, index) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
            <SkillCategory>
              <CategoryTitle>
                <FaServer /> Backend
              </CategoryTitle>
              <SkillsList>
                {skills.backend.map((skill, index) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
            <SkillCategory>
              <CategoryTitle>
                <FaDatabase /> Database
              </CategoryTitle>
              <SkillsList>
                {skills.database.map((skill, index) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
            <SkillCategory>
              <CategoryTitle>
                <FaTools /> Tools
              </CategoryTitle>
              <SkillsList>
                {skills.tools.map((skill, index) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          </SkillsGrid>
          <CodingProfiles>
            <ProfilesTitle>
              <FaCode /> Coding Profiles
            </ProfilesTitle>
            <ProfilesGrid>
              {codingProfiles.map((profile, index) => (
                <ProfileCard
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ProfileIcon style={{ color: profile.color }}>
                    {profile.icon}
                  </ProfileIcon>
                  <ProfileInfo>
                    <ProfileName>{profile.name}</ProfileName>
                    <ProfileHandle>@{profile.handle}</ProfileHandle>
                  </ProfileInfo>
                </ProfileCard>
              ))}
            </ProfilesGrid>
          </CodingProfiles>
        </AboutContent>
      </Container>
    </AboutSection>
  )
}

export default About 
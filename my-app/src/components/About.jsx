import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTools, FaGithub, FaLinkedin, FaTwitter, FaCoffee } from 'react-icons/fa'
import { SiLeetcode, SiCodechef, SiHackerrank, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiSpringboot, SiExpress, SiTailwindcss, SiDocker, SiGit, SiTypescript, SiJavascript, SiPython, SiPostgresql } from 'react-icons/si'
import Container from './Container'

const AboutSection = styled.section`
  padding: 40px 0;
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

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const AboutText = styled(motion.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const CategoryTitle = styled.h3`
  font-size: 18px;
  color: var(--text-primary);
  margin-bottom: 12px;
  font-weight: 600;
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const SkillItem = styled(motion.div)`
  background: var(--card-bg);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--text-primary);
    color: var(--text-primary);
    transform: translateY(-2px);
  }
`

const CodingProfiles = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
`

const TechStackSection = styled.div`
  margin-bottom: 60px;
`

const TechStackTitle = styled(motion.h3)`
  font-size: 24px;
  color: var(--text-primary);
  margin-bottom: 30px;
  font-weight: 700;
  text-align: center;
`

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 12px;
  }
`

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--text-primary);
    box-shadow: 0 8px 16px var(--shadow-color);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const TechIcon = styled.div`
  font-size: 32px;
  color: var(--text-primary);
  transition: all 0.3s ease;

  ${TechItem}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const TechName = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-secondary);
  text-align: center;
  transition: color 0.3s ease;

  ${TechItem}:hover & {
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
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
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--text-primary);
    box-shadow: 0 8px 24px var(--shadow-color);
  }
`

const ProfileIcon = styled.div`
  font-size: 24px;
  color: var(--text-primary);
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
  const techStack = [
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Java', icon: <FaCoffee /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'Python', icon: <SiPython /> },
  ]

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
      handle: 'saimanikanta540',
      icon: <SiLeetcode />,
      url: 'https://leetcode.com/u/saimanikanta540',
      color: '#FFA116'
    },
    {
      name: 'CodeChef',
      handle: 'klu_31961',
      icon: <SiCodechef />,
      url: 'https://www.codechef.com/users/klu_31961',
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
        <TechStackSection>
          <TechStackTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tech Stack
          </TechStackTitle>
          <TechStackGrid>
            {techStack.map((tech, index) => (
              <TechItem
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechItem>
            ))}
          </TechStackGrid>
        </TechStackSection>

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
      </Container>
    </AboutSection>
  )
}

export default About 
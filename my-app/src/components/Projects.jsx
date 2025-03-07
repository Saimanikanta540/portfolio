import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'


const ProjectsSection = styled.section`
  background-color: var(--bg-primary);
  padding: 100px 0;
`

const Container = styled.div`
  max-width: 1400px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px var(--shadow-color);
  }
`

const ProjectImage = styled.img`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // 16:9 aspect ratio
  overflow: hidden;
  background: var(--bg-secondary);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

const ProjectContent = styled.div`
  padding: 20px;
`

const ProjectTitle = styled.h3`
  font-size: 24px;
  color: var(--text-primary);
  margin-bottom: 10px;
  font-weight: 600;
`

const ProjectDescription = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`

const TechTag = styled.span`
  font-size: 14px;
  color: var(--accent-color);
  background: rgba(100, 255, 218, 0.1);
  padding: 4px 12px;
  border-radius: 15px;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-hover);
  }
`

const Projects = () => {
  const projects = [
    {
      title: "Arbeit - Job Management System",
      description: "A comprehensive job platform where employers can post vacancies and track applications. Features include user authentication, job posting, application tracking, and a responsive dashboard.",
      image: "/images/arbeit.jpg",
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Saimanikanta540/arbeit",
      demo: "http://localhost:5173/not"
    },
    {
      title: "Budget-Buddy: Personal Finance Tracker",
      description: "A frontend-only budget management application that helps users track their income, expenses, and savings. Features include expense categorization, budget visualization, and local storage persistence.",
      image: "/images/budget-buddy.jpg",
      technologies: ["React.js", "Context API", "CSS"],
      github: "https://github.com/Saimanikanta540/budget-buddy",
      demo: "http://localhost:5173/not"
    },
    {
      title: "Car Rental System",
      description: "A full-stack car rental system with features for booking vehicles, managing inventory, and handling user authentication. Includes a responsive UI and real-time availability checking.",
      image: "/images/car-rental.jpg",
      technologies: ["React.js", "Spring Boot", "MySQL"],
      github: "https://github.com/Saimanikanta540/car-rental",
      demo: "http://localhost:5173/not"
    }
  ]

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  )
}

export default Projects 
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa'
import Container from './Container'


const ProjectsSection = styled.section`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 30px;
  }
`

const FilterButton = styled(motion.button)`
  padding: 8px 16px;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 13px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  
  &:hover {
    border-color: var(--text-primary);
    color: var(--text-primary);
  }
  
  &.active {
    background: var(--text-primary);
    color: var(--bg-primary);
    border-color: var(--text-primary);
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  height: auto;
  min-height: 500px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--shadow-color);
    border-color: var(--accent-color);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: var(--bg-secondary);
  position: relative;

  img {
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
  padding: 24px;
`

const ProjectTitle = styled.h3`
  font-size: 20px;
  color: var(--text-primary);
  margin-bottom: 12px;
  font-weight: 600;
`

const ProjectDescription = styled.p`
  font-size: 15px;
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
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--border-color);
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }
`

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      title: "Arbeit - Job Management System",
      description: "A comprehensive job platform where employers can post vacancies and track applications. Features include user authentication, job posting, application tracking, and a responsive dashboard.",
      image:  "/arbeit.png",
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/Saimanikanta540/arbeit",
      demo:  "https://arbeit-vrs.vercel.app/"
    },
    {
      title: "Budget-Buddy: Personal Finance Tracker",
      description: "A frontend-only budget management application that helps users track their income, expenses, and savings. Features include expense categorization, budget visualization, and local storage persistence.",
      image: "/budget-buddy.png",
      technologies: ["React.js", "Context API", "CSS"],
      category: "frontend",
      github: "https://github.com/Saimanikanta540/budget-buddy",
      demo: "https://budget-buddy.saipasumarthi.dev/"
    },
    {
      title: "Car Rental System",
      description: "A full-stack car rental system with features for booking vehicles, managing inventory, and handling user authentication. Includes a responsive UI and real-time availability checking.",
      image: "/dive-ease.png",
      technologies: ["React.js", "Spring Boot", "MySQL"],
      category: "fullstack",
      github: "https://github.com/Saimanikanta540/car-rental",
      demo: "#"
    },
    {
      title: "NytLyf - Event Discovery App",
      description: "A mobile application built with React Native and Expo that provides a platform for users to explore events, browse categories, and manage their profile and saved items. Features include home feed, explore functionality, category browsing, search, and user preferences.",
      image: "nytlyf.png",
      technologies: ["React Native", "Expo", "TypeScript", "Expo Router"],
      category: "frontend",
      github: "https://github.com/Saimanikanta540/NytLyf",
      demo: "#"
    },
    {
      title: "Job Market Analysis",
      description: "Built a data-driven job market analysis system to analyze trends, skills demand, and employment patterns using real-world datasets with interactive dashboards. Implemented Machine Learning concepts and data analytics techniques (Pandas, NumPy, Matplotlib) to extract meaningful insights and support decision-making.",
      image: "job-market.png",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Matplotlib/Seaborn"],
      category: "fullstack",
      github: "https://github.com/Saimanikanta540/Job_Market_Analysis",
      demo: "#"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'fullstack', label: 'Full Stack', icon: null },
    { id: 'frontend', label: 'Frontend', icon: null }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
        
        <FilterContainer>
          {filters.map((filterOption) => (
            <FilterButton
              key={filterOption.id}
              className={filter === filterOption.id ? 'active' : ''}
              onClick={() => setFilter(filterOption.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterOption.icon && <span>{filterOption.icon}</span>}
              {filterOption.label}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <AnimatePresence mode="wait">
          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
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
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  )
}

export default Projects 
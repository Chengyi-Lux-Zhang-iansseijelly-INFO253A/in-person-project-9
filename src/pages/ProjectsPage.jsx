import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SearchBar from '../components/SearchBar'
import { useFetch } from '../hooks/useFetch'
import { projects } from '../data/projects'

function ProjectsPage() {
  // const [filteredProjects, setFilteredProjects] = useState(projects)

  // TODO: Replace this with the useFetch custom hook
  const { data: projects, loading, error } = useFetch('/api/projects')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term) => setSearchTerm(term)

  const filteredProjects = (projects || []).filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p className="page-description">
        Here are some of the projects I've worked on recently.
      </p>

      <SearchBar onSearch={handleSearch} />

      {loading && <div className="spinner">Loading projects...</div>}
      {error && <div className="error">Could not load projects: {error}</div>}

      <div className="projects-grid">
        {filteredProjects.map(project => (
          // TODO: Wrap ProjectCard with Link to navigate to project detail
          <Link key={project.id} to={`/projects/${project.id}`} className="project-card-link">
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>No projects match your search.</p>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage
import projects from '../data/projects'

export function useProjects() {
  function getProjects() {
    return projects
  }

  return { getProjects }
}

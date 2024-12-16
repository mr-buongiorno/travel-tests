import type { Languages } from './types'

export function getCountry(projectName: string): Languages {
  const splitedProjectName = projectName.split('.')
  return <Languages>splitedProjectName[1]
}

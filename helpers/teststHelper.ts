import type { Languages } from './types'

/**
 * Return language letters based on project name.
 * @param {string} projectName
 * @returns {Languages} Return language letters
 * @example
 * //returns 'pl'
 * getTravelLanguage('travelplanet.pl');
 */
export function getCountry(projectName: string): Languages {
  const splitedProjectName = projectName.split('.')
  return <Languages>splitedProjectName[1]
}

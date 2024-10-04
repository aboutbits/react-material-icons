import React from 'react'
import { IconProps } from './types'

const IconNoPhotographyOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m819-28-92-92H160q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h41v114L27-820l57-57L876-85l-57 57Zm61-167L659-417q5-42-8.5-81.5T607-568q-29-29-68.5-42.5T457-619L300-775l60-65h240l74 80h126q33 0 56.5 23.5T880-680v485Zm-400-65q23 0 44.5-5t41.5-16L321-526q-11 20-16 41.5t-5 44.5q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-20 7.5-38.5T409-511l142 142q-14 14-32.5 21.5T480-340Z" />
  </svg>
)

export { IconNoPhotographyOutlinedFilled as default }

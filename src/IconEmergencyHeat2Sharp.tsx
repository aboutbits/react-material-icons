import React from 'react'
import { IconProps } from './types'

const IconEmergencyHeat2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M396-321q0 38 19 75.5t65 89.5l-57 52q-58-61-83-111t-25-104q0-38 11.5-80T364-504q24-59 32.5-88.5T405-647q0-38-20.5-72T316-797l56-58q60 55 86.5 103T485-648q0 35-10 73.5T439-474q-25 60-34 92t-9 61Zm-195 0q0 38 19.5 75.5T286-156l-57 52q-58-61-83.5-111T120-319q0-38 11.5-80T169-504q24-59 32.5-88.5T210-647q0-38-20-72t-68-78l55-58q60 55 86.5 103T290-648q0 35-10 73.5T244-474q-25 60-34 92t-9 61Zm390 0q0 38 19.5 75.5T676-156l-57 51q-58-61-83.5-110.5T510-319q0-38 11.5-80T559-504q24-59 32.5-88.5T600-647q0-38-20-72t-68-78l55-58q60 55 86.5 103T680-648q0 35-10 73.5T634-474q-25 60-34 92t-9 61Zm169-199v-80h80v80h-80Zm0-120v-200h80v200h-80Z" />
  </svg>
)

export { IconEmergencyHeat2Sharp as default }

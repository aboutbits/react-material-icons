import React from 'react'
import { IconProps } from './types.js'

export const IconFlatwareSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-400q-33 0-56.5-23.5T120-600v-212q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v212q0 33-23.5 56.5T280-520v400h-80Zm280 0v-404q-42-20-61-62.5T400-676q0-63 31.5-113.5T520-840q57 0 88.5 50.5T640-676q0 47-19 89.5T560-524v404h-80Zm200 0v-720q66 0 113 47t47 113v240h-80v320h-80Z" />
  </svg>
)
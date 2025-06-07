import React from 'react'
import { IconProps } from './types.js'

export const IconClinicalNotesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480q-17 0-28.5 11.5T640-440q0 17 11.5 28.5T680-400ZM440-40v-171q42-24 86-40t92-24l62 75 62-75q48 6 92 23t86 40v172H440Zm79-80h123l-54-66q-18 5-35 13t-34 17v36Zm199 0h122v-36q-16-10-33-17.5T772-186l-54 66Zm-76 0Zm76 0Zm-358 0H120v-720h720v280q-16-20-35-38t-45-24v-138H200v560h160v80Zm-80-480h280q26-20 57-30t63-10v-40H280v80Zm0 160h200q0-21 4.5-41t12.5-39H280v80Zm0 160h126l61-27v-53H280v80Zm80 80H200v-560h560v137q-18-8-38.5-12.5T680-640q-83 0-141.5 58.5T480-440q0 31 8.5 59.5T514-328l-154 69v59Zm320-240Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconSensorDoorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h640v800H160Zm80-80h480v-640H240v640Zm380-260q25 0 42.5-17.5T680-480q0-25-17.5-42.5T620-540q-25 0-42.5 17.5T560-480q0 25 17.5 42.5T620-420ZM240-160v-640 640Z" />
  </svg>
)

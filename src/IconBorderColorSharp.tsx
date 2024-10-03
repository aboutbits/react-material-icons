import React from 'react'
import { IconProps } from './types.js'

export const IconBorderColorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l505-504 168 171-503 503H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
  </svg>
)

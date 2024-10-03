import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageFrenchSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-400h280v80H240v80h160v80H240v160h-80Zm360 0v-400h240l40 40v160l-40 40h-34l74 160h-84l-75-160h-41v160h-80Zm80-240h120v-80H600v80Z" />
  </svg>
)

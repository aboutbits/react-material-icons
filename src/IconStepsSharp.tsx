import React from 'react'
import { IconProps } from './types.js'

export const IconStepsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M736-160h53l11-63-195-195-71-214-133 30-41-39v-134l-28-14-156 209h120l440 420Zm-201 0h85L264-500H162l373 340Zm-30 80L27-514l281-377 132 66v134l147-38 88 267 205 205-30 177H505Z" />
  </svg>
)

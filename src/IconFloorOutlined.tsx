import React from 'react'
import { IconProps } from './types.js'

export const IconFloorOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-80h140v-180h180v-180h180v-180h180v-140h80v220H700v180H520v180H340v180H120Z" />
  </svg>
)

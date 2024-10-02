import React from 'react'
import { IconProps } from './types'

export const IconMarkdownSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m640-360 120-120-42-43-48 48v-125h-60v125l-48-48-42 43 120 120ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm60-120h60v-180h40v120h60v-120h40v180h60v-240H220v240Z" />
  </svg>
)

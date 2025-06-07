import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageUsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-400h80v320h120v-320h80v400H160Zm360 0v-120h80v40h120v-80H520v-240h280v120h-80v-40H600v80h200v240H520Z" />
  </svg>
)

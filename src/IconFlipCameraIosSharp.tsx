import React from 'react'
import { IconProps } from './types.js'

export const IconFlipCameraIosSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-640h206l74-80h240l74 80h206v640H80Zm80-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Zm0 200q79 0 136-53.5T678-426l30 28 42-42-100-100-100 100 42 42 26-26q-6 53-45 88.5T480-300q-13 0-25.5-2.5T430-310l-44 44q22 12 45.5 19t48.5 7ZM310-340l100-100-42-42-26 26q6-53 45-88.5t93-35.5q13 0 25.5 2.5T530-570l44-44q-22-12-45.5-19t-48.5-7q-79 0-136 53.5T282-454l-30-28-42 42 100 100Z" />
  </svg>
)

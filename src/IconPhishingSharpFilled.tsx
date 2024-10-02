import React from 'react'
import { IconProps } from './types'

export const IconPhishingSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120q-100 0-170-70t-70-170v-240l200 200-56 57-64-64v47q0 66 47 113t113 47q66 0 113-47t47-113v-127q-36-14-58-44.5T520-600q0-38 22-68.5t58-44.5v-167h80v167q36 14 58 44.5t22 68.5q0 38-22 69t-58 44v127q0 100-70 170t-170 70Z" />
  </svg>
)

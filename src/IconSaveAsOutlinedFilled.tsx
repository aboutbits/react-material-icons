import React from 'react'
import { IconProps } from './types.js'

export const IconSaveAsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520ZM240-560h360v-160H240v160Zm543 296 37-39-37-37-38 38 38 38ZM440-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5q-20 3-39 12.5T686-441l-86 86v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35h4l-44 44v76Z" />
  </svg>
)

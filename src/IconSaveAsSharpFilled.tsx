import React from 'react'
import { IconProps } from './types.js'

export const IconSaveAsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-40v-123l263-262 123 122L643-40H520ZM240-560h360v-160H240v160Zm543 296 37-39-37-37-38 38 38 38ZM440-120H120v-720h560l160 160v86L600-355v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35h4l-44 44v76Z" />
  </svg>
)

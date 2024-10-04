import React from 'react'
import { IconProps } from './types.js'

export const IconRobotSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-480q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480Zm240 0q33 0 56.5-23.5T680-560q0-33-23.5-56.5T600-640q-33 0-56.5 23.5T520-560q0 33 23.5 56.5T600-480ZM360-120v-160h80v160h-80Zm160 0v-160h80v160h-80Zm-320 0q-33 0-56.5-23.5T120-200v-400q0-100 70-170t170-70h240q100 0 170 70t70 170v400q0 33-23.5 56.5T760-120h-80v-160q0-33-23.5-56.5T600-360H360q-33 0-56.5 23.5T280-280v160h-80Z" />
  </svg>
)
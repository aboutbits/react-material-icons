import React from 'react'
import { IconProps } from './types'

const IconRobotSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-400q0-100 70-170t170-70h240q100 0 170 70t70 170v400q0 33-23.5 56.5T760-120H200Zm0-80h560v-400q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v400Zm160-280q-33 0-56.5-23.5T280-560q0-33 23.5-56.5T360-640q33 0 56.5 23.5T440-560q0 33-23.5 56.5T360-480Zm240 0q-33 0-56.5-23.5T520-560q0-33 23.5-56.5T600-640q33 0 56.5 23.5T680-560q0 33-23.5 56.5T600-480ZM280-200v-80q0-33 23.5-56.5T360-360h240q33 0 56.5 23.5T680-280v80h-80v-80h-80v80h-80v-80h-80v80h-80Zm-80 0h560-560Z" />
  </svg>
)

export { IconRobotSharp as default }
import React from 'react'
import { IconProps } from './types'

const IconTransitionChopRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-138 462-120-78-302H160v422Zm95 58h545v-480H627l73 283q8 32-8.5 60.5T643-340L255-240Zm-95-480Z" />
  </svg>
)

export { IconTransitionChopRounded as default }

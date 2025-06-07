import React from 'react'
import { IconProps } from './types.js'

export const IconAssignmentIndSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h248q14-36 44-58t68-22q38 0 68 22t44 58h248v720H120Zm360-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Zm0 350q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-200h560v-46q-54-53-125.5-83.5T480-360q-83 0-154.5 30.5T200-246v46Z" />
  </svg>
)

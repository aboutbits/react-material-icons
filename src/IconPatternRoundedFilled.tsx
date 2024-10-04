import React from 'react'
import { IconProps } from './types.js'

export const IconPatternRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320h10q5 0 10 2l142-142q-5-21 .5-41.5T423-537q15-15 35.5-20.5t41.5-.5l142-142q-2-5-2-10v-10q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640l-20-2-142 141q5 21-.5 42T537-423q-16 16-36.5 21.5T459-402L336-280h76q11-18 29-29t39-11q22 0 40.5 10.5T550-280h100q11-19 29.5-29.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160q-22 0-40.5-11T650-200H550q-11 19-29.5 29.5T480-160q-21 0-39-11t-29-29H308q-11 18-29 29t-39 11Zm0-240q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm0-240q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 240q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
  </svg>
)
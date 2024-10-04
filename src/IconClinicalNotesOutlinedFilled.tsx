import React from 'react'
import { IconProps } from './types'

const IconClinicalNotesOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440-40v-116q0-21 10-39.5t28-29.5q32-19 67.5-31.5T618-275l62 75 62-75q37 6 72 18.5t67 31.5q18 11 28.5 29.5T920-156v116H440Zm-80-116v36H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q-31-39-70-59.5T680-640v-40H280v80h280q-20 16-36 36t-27 44H280v80h200q0 21 4.5 41t12.5 39H280v80h138q-27 23-42.5 55.5T360-156Z" />
  </svg>
)

export { IconClinicalNotesOutlinedFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconMarkEmailReadRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m160-720 320 200 320-200H160Zm0 560q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-120L501-453q-3 2-21 6-5 0-10.5-1.5T459-453L160-640v400h220q17 0 28.5 11.5T420-200q0 17-11.5 28.5T380-160H160Zm320-240Zm0-120Zm0 75Zm158 253 198-198q11-11 28-11t28 11q11 11 11 28t-11 28L666-108q-12 12-28 12t-28-12L496-222q-11-11-11-28t11-28q11-11 28-11t28 11l86 86Z" />
  </svg>
)

export { IconMarkEmailReadRounded as default }

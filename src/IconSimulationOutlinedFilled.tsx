import React from 'react'
import { IconProps } from './types.js'

export const IconSimulationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280v-23q0-44 44-70.5T480-400q72 0 116 26.5t44 70.5v23H320Zm160-160q-33 0-56.5-23.5T400-520q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520q0 33-23.5 56.5T480-440ZM280-154q-115-14-177.5-47T40-280v-400q0-57 113.5-88T480-799q213 0 326.5 31T920-680v400q0 46-62.5 79T680-154v-480q51-8 90.5-19.5T827-676q-43-17-147-30.5T480-720q-96 0-200 13.5T133-676q17 12 56.5 23t90.5 19v480Z" />
  </svg>
)
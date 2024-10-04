import React from 'react'
import { IconProps } from './types.js'

export const IconShapeLineOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM640-40q-33 0-56.5-23.5T560-120v-200q0-33 23.5-56.5T640-400h200q33 0 56.5 23.5T920-320v200q0 33-23.5 56.5T840-40H640Zm69-612L308-252q5 12 8.5 25t3.5 27q0 50-34.5 85T200-80q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q14 0 27 3.5t25 8.5l400-401q-5-12-8.5-24.5T640-760q0-51 35-85.5t85-34.5q51 0 85.5 34.5T880-760q0 50-34.5 85T760-640q-14 0-26.5-3.5T709-652Z" />
  </svg>
)
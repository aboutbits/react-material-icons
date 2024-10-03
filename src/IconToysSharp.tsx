import React from 'react'
import { IconProps } from './types.js'

export const IconToysSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160q-45 0-78.5-28.5T162-262H80v-290h112l-72-72-40 40-56-56 136-136 56 56-40 40 56 56 60-176h377l81 244h130v294h-82q-6 45-39.5 73.5T680-160q-38 0-68.5-22T568-240H392q-13 36-43.5 58T280-160Zm16-400h144v-160h-91l-53 160Zm224 0h144l-53-160h-91v160ZM392-320h176q13-36 43.5-58t68.5-22q30 0 56 14t44 38h20v-132H160v132h20q18-24 44-38t56-14q38 0 68.5 22t43.5 58Zm-112 80q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240ZM480-400Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconLastPageRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M408-480 252-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L308-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Zm272-240q17 0 28.5 11.5T720-680v400q0 17-11.5 28.5T680-240q-17 0-28.5-11.5T640-280v-400q0-17 11.5-28.5T680-720Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconPodiatryOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m684-389 179-179 57 57-180 179-56-57ZM40-160v-106q0-24 13.5-44T90-339q21-8 40-19t38-25l58 58q5 7 13.5 6.5T254-325q5-5 5-13.5t-5-15.5l-55-55 15.5-15.5Q222-432 230-441l54 55q5 7 13.5 7t15.5-7q5-5 5-13.5t-5-15.5l-55-54q5-10 10.5-20.5T278-512l65 65q5 7 13.5 7t15.5-7q5-5 5-13t-5-15l-77-77 41-114 216-214 282 283-414 437H40Zm345-80 337-355-337 355Zm-265 0h265l337-355-171-171-146 145-29 81 30 30q23 24 23 57.5T406-396L293-283q-24 24-57 24t-56-24l-8-8q-13 8-26 14t-26 11v26Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconNoFoodOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m865-210-73-73 40-397H450l-10-80h200v-160h80v160h200l-55 550ZM625-449ZM819-28 27-820l57-57L876-85l-57 57ZM40-200v-80h600v80H40ZM80-40q-17 0-28.5-11.5T40-80v-40h600v40q0 17-11.5 28.5T600-40H80Zm282-559v80q-5 0-11-.5t-11-.5q-59 0-111.5 20T147-440h374l80 80H40q0-121 93.5-180.5T340-600q5 0 11 .5t11 .5Zm-22 159Z" />
  </svg>
)

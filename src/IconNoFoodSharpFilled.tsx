import React from 'react'
import { IconProps } from './types'

const IconNoFoodSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 487-360H40q0-121 93.5-180.5T340-600q5 0 11 .5t11 .5v113L27-820l57-57L876-85l-57 57ZM40-200v-80h600v80H40Zm0 160v-80h600v80H40Zm825-170L458-616l-18-144h200v-160h80v160h200l-55 550Z" />
  </svg>
)

export { IconNoFoodSharpFilled as default }

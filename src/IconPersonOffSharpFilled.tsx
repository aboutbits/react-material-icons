import React from 'react'
import { IconProps } from './types.js'

export const IconPersonOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 686-160H160v-112q0-34 17.5-62.5T224-378q45-23 91.5-37t94.5-21L55-791l57-57 736 736-57 57Zm-55-323q29 14 46 42.5t18 61.5L666-408q18 7 35.5 14t34.5 16ZM568-506 346-728q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconTransitionPushOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-160v-79h80v-481h-80v-80h80q33 0 56.5 23.5T480-720v480q0 33-23.5 56.5T400-160h-80Zm320 0q-33 0-56.5-23.5T560-240v-480q0-33 23.5-56.5T640-800h200q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H640ZM200-320l-57-56 63-64H40v-80h166l-63-63 57-57 160 160-160 160Z" />
  </svg>
)
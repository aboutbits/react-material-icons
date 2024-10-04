import React from 'react'
import { IconProps } from './types'

const IconTransitionPushSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-160v-79h80v-481h-80v-80h160v640H320Zm240 0v-640h360v640H560Zm80-79h200v-481H640v481Zm-440-81-57-56 63-64H40v-80h166l-63-63 57-57 160 160-160 160Zm440 81v-481 481Z" />
  </svg>
)

export { IconTransitionPushSharp as default }

import React from 'react'
import { IconProps } from './types.js'

export const IconDoNotStepSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m740-333-56-56 179-179 57 56-180 179Zm-84-85L372-701l180-179 283 283-179 179ZM791-56 553-293 420-160H40v-158q34-14 67-28.5t65-34.5l69 69 28-28-66-66 15.5-15.5Q226-429 234-438l66 66 28-28-71-71q6-11 10.5-22t7.5-23l84 84 28-28L56-791l56-57 735 736-56 56Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

const IconBatteryErrorSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m656-80-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Zm-376 0v-720h120v-80h160v80h120v348q-79 21-129 85.5T501-219q0 38 11 73t33 66H280Z" />
  </svg>
)

export { IconBatteryErrorSharpFilled as default }

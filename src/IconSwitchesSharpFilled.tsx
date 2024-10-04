import React from 'react'
import { IconProps } from './types'

const IconSwitchesSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680q50 0 90.5 22t69.5 58h440v240H440q-29 36-69.5 58T280-280Zm196-160h324v-80H476q2 9 3 20t1 20q0 9-1 20t-3 20Z" />
  </svg>
)

export { IconSwitchesSharpFilled as default }

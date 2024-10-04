import React from 'react'
import { IconProps } from './types'

const IconBatteryErrorOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m656-80-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Zm-336 0q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v308q-79 21-129 85.5T501-219q0 38 11 73t33 66H320Z" />
  </svg>
)

export { IconBatteryErrorOutlinedFilled as default }

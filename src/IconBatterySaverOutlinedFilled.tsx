import React from 'react'
import { IconProps } from './types'

const IconBatterySaverOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-80v-120H520v-80h120v-120h80v120h120v80H720v120h-80Zm-320 0q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v280q-100 1-170 70.5T440-240q0 46 16 87t45 73H320Z" />
  </svg>
)

export { IconBatterySaverOutlinedFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconFlightClassSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-440v-360h240v360H480Zm240 200H320L200-640v-160h80v160l100 320h340v80ZM320-120v-80h400v80H320Z" />
  </svg>
)

export { IconFlightClassSharpFilled as default }

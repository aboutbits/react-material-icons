import React from 'react'
import { IconProps } from './types'

const IconShopTwoOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-360 220-140-220-140v280ZM120-80q-33 0-56.5-23.5T40-160v-440h80v440h680v80H120Zm160-160q-33 0-56.5-23.5T200-320v-440h200v-80q0-33 23.5-56.5T480-920h160q33 0 56.5 23.5T720-840v80h200v440q0 33-23.5 56.5T840-240H280Zm200-520h160v-80H480v80Z" />
  </svg>
)

export { IconShopTwoOutlinedFilled as default }

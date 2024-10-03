import React from 'react'
import { IconProps } from './types.js'

export const IconShopTwoRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80q-33 0-56.5-23.5T40-160v-400q0-17 11.5-28.5T80-600q17 0 28.5 11.5T120-560v400h640q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H120Zm160-160q-33 0-56.5-23.5T200-320v-400q0-17 11.5-28.5T240-760h160v-80q0-33 23.5-56.5T480-920h160q33 0 56.5 23.5T720-840v80h160q17 0 28.5 11.5T920-720v400q0 33-23.5 56.5T840-240H280Zm0-80h560v-360H280v360Zm200-440h160v-80H480v80ZM280-320v-360 360Zm200-71q0 12 10.5 17t20.5-1l162-103q9-6 9-17t-9-17L511-615q-10-6-20.5-1T480-599v208Z" />
  </svg>
)

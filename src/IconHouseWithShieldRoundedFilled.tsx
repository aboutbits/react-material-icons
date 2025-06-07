import React from 'react'
import { IconProps } from './types.js'

export const IconHouseWithShieldRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240Zm80-338q0 66 38 128t103 84q5 2 9.5 2.5t9.5.5q5 0 9.5-.5t9.5-2.5q65-22 103-84t38-128v-65q0-17-9-31.5T607-577l-100-50q-13-6-27-6t-27 6l-100 50q-15 8-24 22.5t-9 31.5v65Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconTourRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-400v280q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-720q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v40h501q21 0 33 17.5t4 37.5l-58 145 58 145q8 20-4 37.5T781-400H280Zm220-120q33 0 56.5-23.5T580-600q0-33-23.5-56.5T500-680q-33 0-56.5 23.5T420-600q0 33 23.5 56.5T500-520Z" />
  </svg>
)
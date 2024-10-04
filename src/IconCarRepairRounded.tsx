import React from 'react'
import { IconProps } from './types'

const IconCarRepairRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-17 0-28.5-11.5T440-120v-80H200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h560q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H520v80q0 17-11.5 28.5T480-80ZM360-500q17 0 28.5-11.5T400-540q0-17-11.5-28.5T360-580q-17 0-28.5 11.5T320-540q0 17 11.5 28.5T360-500Zm240 0q17 0 28.5-11.5T640-540q0-17-11.5-28.5T600-580q-17 0-28.5 11.5T560-540q0 17 11.5 28.5T600-500ZM240-320q-17 0-28.5-11.5T200-360v-243q0-7 1-13.5t3-12.5l54-157q8-24 29-39t47-15h292q26 0 47 15t29 39l54 157q2 6 3 12.5t1 13.5v243q0 17-11.5 28.5T720-320q-17 0-28.5-11.5T680-360v-40H280v40q0 17-11.5 28.5T240-320Zm66-360h348l-28-80H334l-28 80Zm-26 80v120-120Zm0 120h400v-120H280v120Z" />
  </svg>
)

export { IconCarRepairRounded as default }

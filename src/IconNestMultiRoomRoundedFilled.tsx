import React from 'react'
import { IconProps } from './types.js'

export const IconNestMultiRoomRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-17 0-28.5-11.5T160-160v-80q0-17 11.5-28.5T200-280h280q17 0 28.5 11.5T520-240v80q0 17-11.5 28.5T480-120H200Zm440 0q-17 0-28.5-11.5T600-160v-80q0-17 11.5-28.5T640-280h120q17 0 28.5 11.5T800-240v80q0 17-11.5 28.5T760-120H640ZM200-360q-17 0-28.5-11.5T160-400v-80q0-17 11.5-28.5T200-520h120q17 0 28.5 11.5T360-480v80q0 17-11.5 28.5T320-360H200Zm280 0q-17 0-28.5-11.5T440-400v-80q0-17 11.5-28.5T480-520h280q17 0 28.5 11.5T800-480v80q0 17-11.5 28.5T760-360H480ZM220-600q-14 0-18.5-13.5T208-636l224-168q11-8 23-12t25-4q13 0 25 4t23 12l224 168q11 9 6.5 22.5T740-600H220Z" />
  </svg>
)

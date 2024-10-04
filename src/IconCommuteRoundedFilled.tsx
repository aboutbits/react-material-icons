import React from 'react'
import { IconProps } from './types.js'

export const IconCommuteRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-220v20q0 17-11.5 28.5T440-160q-17 0-28.5-11.5T400-200v-200q0-7 1-14t3-13l42-119q8-24 29-39t47-15h236q26 0 47 15t29 39l42 119q2 6 3 13t1 14v200q0 17-11.5 28.5T840-160q-17 0-28.5-11.5T800-200v-20H480Zm0-240h320l-28-80H508l-28 80Zm40 160q17 0 28.5-11.5T560-340q0-17-11.5-28.5T520-380q-17 0-28.5 11.5T480-340q0 17 11.5 28.5T520-300Zm240 0q17 0 28.5-11.5T800-340q0-17-11.5-28.5T760-380q-17 0-28.5 11.5T720-340q0 17 11.5 28.5T760-300ZM168-160q-14 0-19-12t5-22l46-46q-50 0-85-35t-35-85v-320q0-66 59-93t201-27q148 0 204 26t56 94q0 17-11.5 28.5T560-640q-17 0-28.5-11.5T520-680H160v240h160q17 0 28.5 11.5T360-400v200q0 17-11.5 28.5T320-160H168Zm32-160q17 0 28.5-11.5T240-360q0-17-11.5-28.5T200-400q-17 0-28.5 11.5T160-360q0 17 11.5 28.5T200-320Z" />
  </svg>
)

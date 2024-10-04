import React from 'react'
import { IconProps } from './types.js'

export const IconDetectorAlarmRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-17 0-28.5-11.5T440-160v-120q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v120q0 17-11.5 28.5T480-120Zm311-129q-11 11-28 11t-28-11l-86-85q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l85 85q11 11 11.5 27.5T791-249Zm-622 0q-11-11-11-28t11-28l85-86q12-12 28-12t28 12q12 12 12 28.5T310-334l-85 85q-11 11-27.5 11.5T169-249Zm155-391 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-40q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v40q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types'

export const IconElevatorRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-400v120q0 17 11.5 28.5T320-240h40q17 0 28.5-11.5T400-280v-120q11-11 25.5-17.5T440-440v-60q0-33-23.5-56.5T360-580h-40q-33 0-56.5 23.5T240-500v60q0 16 14.5 22.5T280-400Zm60-220q21 0 35.5-14.5T390-670q0-21-14.5-35.5T340-720q-21 0-35.5 14.5T290-670q0 21 14.5 35.5T340-620Zm216 100h128q12 0 17.5-10.5T701-551l-64-102q-6-10-17-10t-17 10l-64 102q-6 10-.5 20.5T556-520Zm81 213 64-102q6-10 .5-20.5T684-440H556q-12 0-17.5 10.5t.5 20.5l64 102q6 10 17 10t17-10ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

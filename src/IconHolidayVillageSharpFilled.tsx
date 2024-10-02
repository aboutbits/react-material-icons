import React from 'react'
import { IconProps } from './types'

export const IconHolidayVillageSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-400l240-240 240 240v400H360v-200h-80v200H80Zm200-280h80v-80h-80v80Zm360 280v-433L433-800h113l174 174v466h-80Zm160 0v-499L659-800h113l108 108v532h-80Z" />
  </svg>
)

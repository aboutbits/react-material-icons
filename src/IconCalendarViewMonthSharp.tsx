import React from 'react'
import { IconProps } from './types'

const IconCalendarViewMonthSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-520h160v-200H160v200Zm240 0h160v-200H400v200Zm240 0h160v-200H640v200ZM160-240h160v-200H160v200Zm240 0h160v-200H400v200Zm240 0h160v-200H640v200ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconCalendarViewMonthSharp as default }

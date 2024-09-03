import React from 'react'
import { IconProps } from './types'

const IconCalendarViewDaySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80h720v80H120Zm0-160v-400h720v400H120Zm80-80h560v-240H200v240Zm-80-400v-80h720v80H120Zm80 400v-240 240Z" />
  </svg>
)

export { IconCalendarViewDaySharp as default }

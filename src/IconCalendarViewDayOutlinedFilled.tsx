import React from 'react'
import { IconProps } from './types'

const IconCalendarViewDayOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280q-33 0-56.5-23.5T120-360v-240q0-33 23.5-56.5T200-680h560q33 0 56.5 23.5T840-600v240q0 33-23.5 56.5T760-280H200Zm-80-480v-80h720v80H120Zm0 640v-80h720v80H120Z" />
  </svg>
)

export { IconCalendarViewDayOutlinedFilled as default }

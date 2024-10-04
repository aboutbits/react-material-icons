import React from 'react'
import { IconProps } from './types'

const IconNextWeekOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Zm40 460 160-160-160-160-56 56 104 104-104 104 56 56Z" />
  </svg>
)

export { IconNextWeekOutlinedFilled as default }

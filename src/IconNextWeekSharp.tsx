import React from 'react'
import { IconProps } from './types'

const IconNextWeekSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-600h240v-160h320v160h240v600H80Zm80-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Zm280-60 160-160-160-160-56 56 104 104-104 104 56 56Z" />
  </svg>
)

export { IconNextWeekSharp as default }

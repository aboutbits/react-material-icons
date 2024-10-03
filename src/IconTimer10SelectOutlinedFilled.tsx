import React from 'react'
import { IconProps } from './types.js'

export const IconTimer10SelectOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-320h120v-320H400v320Zm0 120q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h120q50 0 85 35t35 85v320q0 50-35 85t-85 35H400Zm-280 0v-440H40v-120h200v560H120Zm560 0v-80h160v-40H734q-23 0-38.5-15.5T680-374v-92q0-23 15.5-38.5T734-520h186v80H760v40h106q23 0 38.5 15.5T920-346v92q0 23-15.5 38.5T866-200H680Z" />
  </svg>
)

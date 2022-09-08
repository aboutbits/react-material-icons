import React from 'react'
import { IconProps } from './types'

const IconFiberManualRecordSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="12" cy="12" r="8" />
  </svg>
)

export { IconFiberManualRecordSharp as default }

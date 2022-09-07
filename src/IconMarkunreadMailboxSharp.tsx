import React from 'react'
import { IconProps } from './types'

const IconMarkunreadMailboxSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M22 6H10v6H8V4h6V0H6v6H2v16h20V6z" />
  </svg>
)

export { IconMarkunreadMailboxSharp as default }

import React from 'react'
import { IconProps } from './types'

export const IconWindowClosedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-720h640v720H160Zm120-400h160v-40h80v40h160v-200H280v200Zm0 280h400v-200H280v200Zm-40 40h480v-560H240v560Z" />
  </svg>
)

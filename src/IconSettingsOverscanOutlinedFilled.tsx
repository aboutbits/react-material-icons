import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsOverscanOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-400v-160l-80 80 80 80Zm200 120 80-80H400l80 80Zm-80-320h160l-80-80-80 80Zm280 200 80-80-80-80v160ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)
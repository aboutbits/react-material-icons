import React from 'react'
import { IconProps } from './types.js'

export const IconEnterpriseOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h80v112L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-64-64H160Zm720-520v349q0 18-12 29.5T840-250q-8 0-15-3t-13-9L343-731q-11-11-17-25.5t-6-30.5v-13q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640Zm-480-80h160v-80H400v80Z" />
  </svg>
)

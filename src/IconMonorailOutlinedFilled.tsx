import React from 'react'
import { IconProps } from './types.js'

export const IconMonorailOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280h80v120h200v80H240v-80h200v-120ZM320-880h320q66 0 113 47t47 113v380q0 59-41 99.5T660-200H560v-120H400v120H300q-59 0-99.5-40.5T160-340v-380q0-66 46.5-113T320-880Zm-80 200v120h480v-120H240Z" />
  </svg>
)

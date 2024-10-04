import React from 'react'
import { IconProps } from './types'

const IconSmartScreenOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h720q33 0 56.5 23.5T920-680v400q0 33-23.5 56.5T840-200H120Zm120-80h480v-400H240v400Zm290-170q-13 0-21.5-8.5T500-480q0-13 8.5-21.5T530-510q13 0 21.5 8.5T560-480q0 13-8.5 21.5T530-450Zm-200 0q-13 0-21.5-8.5T300-480q0-13 8.5-21.5T330-510q13 0 21.5 8.5T360-480q0 13-8.5 21.5T330-450Zm300 0q-13 0-21.5-8.5T600-480q0-13 8.5-21.5T630-510q13 0 21.5 8.5T660-480q0 13-8.5 21.5T630-450Zm-200 0q-13 0-21.5-8.5T400-480q0-13 8.5-21.5T430-510q13 0 21.5 8.5T460-480q0 13-8.5 21.5T430-450Z" />
  </svg>
)

export { IconSmartScreenOutlinedFilled as default }

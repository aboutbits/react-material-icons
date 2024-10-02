import React from 'react'
import { IconProps } from './types'

export const IconConciergeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-440h160v-440H40v440Zm240 0h79l321-120v-80H520l-70 27-14-37 84-30h360v-80L560-880l-280 79v361ZM400-80h520v-80H400v80Zm40-120h440q0-81-51.5-141.5T700-416v-65h-80v65q-78 14-129 74.5T440-200Z" />
  </svg>
)

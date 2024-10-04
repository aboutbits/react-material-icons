import React from 'react'
import { IconProps } from './types.js'

export const IconScaleOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80q0-111 29.5-189.5T185-400q46-52 103-80.5T400-520v-120q-137-17-228.5-84.5T80-880h800q0 88-91.5 155.5T560-640v120q55 11 112 39.5T775-400q46 52 75.5 130.5T880-80H640v-80h155q-18-152-113.5-220T480-448q-106 0-201.5 68T165-160h155v80H80Zm400 0q-33 0-56.5-23.5T400-160q0-17 6.5-31t17.5-25q24-24 81-50.5T640-320q-28 78-54 135t-50 81q-11 11-25 17.5T480-80Z" />
  </svg>
)
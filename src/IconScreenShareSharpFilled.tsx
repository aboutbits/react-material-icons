import React from 'react'
import { IconProps } from './types'

const IconScreenShareSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-80h880v80H40Zm40-120v-600h800v600H80Zm240-160h80v-80q0-17 11.5-28.5T440-520h80v80l120-120-120-120v80h-80q-50 0-85 35t-35 85v80Z" />
  </svg>
)

export { IconScreenShareSharpFilled as default }

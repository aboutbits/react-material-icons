import React from 'react'
import { IconProps } from './types'

const IconHomeMaxOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280h560q33 0 56.5-23.5T840-360v-240q0-33-23.5-56.5T760-680H200q-33 0-56.5 23.5T120-600v240q0 33 23.5 56.5T200-280Zm80 120v-40h-80q-66 0-113-47T40-360v-240q0-66 47-113t113-47h560q66 0 113 47t47 113v240q0 66-47 113t-113 47h-80v40H280Zm200-320Z" />
  </svg>
)

export { IconHomeMaxOutlined as default }

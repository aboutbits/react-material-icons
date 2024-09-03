import React from 'react'
import { IconProps } from './types'

const IconKettleOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-200v-520L120-880h600v120h80q33 0 56.5 23.5T880-680v200q0 33-23.5 56.5T800-400h-80v200H240Zm80-80h320v-520H280l40 52v468Zm400-200h80v-200h-80v200ZM480-320h120v-440H480v440ZM120-80v-80h720v80H120Zm340-460Z" />
  </svg>
)

export { IconKettleOutlined as default }
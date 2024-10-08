import React from 'react'
import { IconProps } from './types'

const IconVr180Create2dOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160v-320q0-33 23.5-56.5T480-560h320q33 0 56.5 23.5T880-480v320q0 33-23.5 56.5T800-80H480Zm20-120h280l-92-120-68 90-48-66-72 96Zm-180-50q-107-27-173.5-113.5T80-560q0-134 93-227t227-93q110 0 196.5 66.5T710-640H480q-66 0-113 47t-47 113v230Z" />
  </svg>
)

export { IconVr180Create2dOutlinedFilled as default }

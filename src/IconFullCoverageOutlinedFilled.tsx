import React from 'react'
import { IconProps } from './types'

const IconFullCoverageOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-480h80v480h600v80H160Zm160-160q-33 0-56.5-23.5T240-360v-480h680v480q0 33-23.5 56.5T840-280H320Zm80-200h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80Z" />
  </svg>
)

export { IconFullCoverageOutlinedFilled as default }

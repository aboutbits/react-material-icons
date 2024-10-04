import React from 'react'
import { IconProps } from './types'

const IconFullCoverageSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-560h80v480h600v80H80Zm160-160v-560h680v560H240Zm160-200h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80Z" />
  </svg>
)

export { IconFullCoverageSharpFilled as default }

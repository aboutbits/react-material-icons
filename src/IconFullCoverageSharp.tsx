import React from 'react'
import { IconProps } from './types'

const IconFullCoverageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-560h80v480h600v80H80Zm160-160v-560h680v560H240Zm80-80h520v-400H320v400Zm80-120h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80ZM320-360v-400 400Z" />
  </svg>
)

export { IconFullCoverageSharp as default }

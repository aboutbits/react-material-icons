import React from 'react'
import { IconProps } from './types'

const IconCrop75Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200v-560h720v560H120Zm80-80h560v-400H200v400Zm0 0v-400 400Z" />
  </svg>
)

export { IconCrop75Sharp as default }

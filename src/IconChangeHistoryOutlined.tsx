import React from 'react'
import { IconProps } from './types'

const IconChangeHistoryOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-160 400-640 400 640H80Zm144-80h512L480-650 224-240Zm256-205Z" />
  </svg>
)

export { IconChangeHistoryOutlined as default }

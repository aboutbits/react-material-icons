import React from 'react'
import { IconProps } from './types'

const IconChangeHistorySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-160 400-640 400 640H80Z" />
  </svg>
)

export { IconChangeHistorySharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconTopPanelOpenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-300 160-160H320l160 160ZM200-640h560v-120H200v120Zm0 440h560v-360H200v360Zm0-440v-120 120Zm-80 520v-720h720v720H120Z" />
  </svg>
)

export { IconTopPanelOpenSharp as default }

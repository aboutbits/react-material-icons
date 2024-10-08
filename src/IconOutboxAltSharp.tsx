import React from 'react'
import { IconProps } from './types'

const IconOutboxAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-240 480-240-480-240v480Zm80-120v-80l120-40-120-40v-80l260 120-260 120ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
)

export { IconOutboxAltSharp as default }

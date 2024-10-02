import React from 'react'
import { IconProps } from './types'

export const IconAutoAwesomeMotionSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80v-480h480v480H400Zm80-80h320v-320H480v320Zm-240-80v-480h480v80H320v400h-80ZM80-400v-480h480v80H160v400H80Zm400 240v-320 320Z" />
  </svg>
)

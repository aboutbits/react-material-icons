import React from 'react'
import { IconProps } from './types'

export const IconMicExternalOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-694 214-860q14-11 31-15.5t35-4.5q50 0 85 34.5t35 85.5q0 18-5.5 34.5T380-694Zm420 420-80-80v-366q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720v206l-80-80v-126q0-68 47-114t113-46q66 0 113 46t47 114v446Zm20 246L560-288v48q0 66-47 113T400-80q-66 0-113-47t-47-113h-40l-40-400h46L28-820l56-56L876-84l-56 56ZM272-320h16l22-218-24-22h-38l24 240Zm128 160q33 0 56.5-23.5T480-240v-128l-98-98-22 226h-40q0 33 23.5 56.5T400-160ZM272-560h-24 62-38Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconRememberMeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-40v-880h560v880H200Zm280-360q54 0 104.5 12.5T680-352v-368H280v368q45-23 95.5-35.5T480-400Zm0-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)

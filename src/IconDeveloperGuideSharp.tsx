import React from 'react'
import { IconProps } from './types'

const IconDeveloperGuideSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z" />
  </svg>
)

export { IconDeveloperGuideSharp as default }

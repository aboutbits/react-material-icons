import React from 'react'
import { IconProps } from './types'

const IconFeaturedVideoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-400h360v-280H200v280ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconFeaturedVideoSharpFilled as default }

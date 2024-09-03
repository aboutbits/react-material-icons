import React from 'react'
import { IconProps } from './types'

const IconComicBubbleSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m440-803-83 83H240v117l-83 83 83 83v117h117l83 83 100-100 168 85-86-167 101-101-83-83v-117H523l-83-83Zm0-113 116 116h164v164l116 116-116 116 115 226-53 53-226-115-116 116-116-116H160v-164L44-520l116-116v-164h164l116-116Zm0 396Z" />
  </svg>
)

export { IconComicBubbleSharp as default }
import React from 'react'
import { IconProps } from './types'

const IconSouthEastSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-200v-80h264L160-744l56-56 464 464v-264h80v400H360Z" />
  </svg>
)

export { IconSouthEastSharp as default }

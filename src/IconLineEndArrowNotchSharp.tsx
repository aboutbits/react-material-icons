import React from 'react'
import { IconProps } from './types'

const IconLineEndArrowNotchSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z" />
  </svg>
)

export { IconLineEndArrowNotchSharp as default }

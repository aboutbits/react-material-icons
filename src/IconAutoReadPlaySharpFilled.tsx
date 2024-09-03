import React from 'react'
import { IconProps } from './types'

const IconAutoReadPlaySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m400-400 240-160-240-160v320ZM80-80v-800h800v640H240L80-80Z" />
  </svg>
)

export { IconAutoReadPlaySharpFilled as default }

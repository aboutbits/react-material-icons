import React from 'react'
import { IconProps } from './types'

const IconPanToolSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M339-40 48-465l69-66 163 114v-423h80v360h80v-440h80v440h80v-400h80v400h80v-320h80v760H339Z" />
  </svg>
)

export { IconPanToolSharpFilled as default }

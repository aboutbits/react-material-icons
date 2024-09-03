import React from 'react'
import { IconProps } from './types'

const IconSpaceDashboardSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h320v720H120Zm400-440v-280h320v280H520Zm320 440H520v-360h320v360Z" />
  </svg>
)

export { IconSpaceDashboardSharpFilled as default }

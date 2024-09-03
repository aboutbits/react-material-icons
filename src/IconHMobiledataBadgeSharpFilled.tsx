import React from 'react'
import { IconProps } from './types'

const IconHMobiledataBadgeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280h80v-160h160v160h80v-400h-80v160H400v-160h-80v400ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconHMobiledataBadgeSharpFilled as default }

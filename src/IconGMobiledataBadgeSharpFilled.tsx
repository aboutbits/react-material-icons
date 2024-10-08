import React from 'react'
import { IconProps } from './types'

const IconGMobiledataBadgeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280h320v-240H480v80h80v80H400v-240h240v-80H320v400ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconGMobiledataBadgeSharpFilled as default }

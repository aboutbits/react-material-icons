import React from 'react'
import { IconProps } from './types'

const IconPhotoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280h480L570-480 450-320l-90-120-120 160ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconPhotoSharpFilled as default }

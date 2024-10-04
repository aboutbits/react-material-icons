import React from 'react'
import { IconProps } from './types'

const IconPhotoCameraBackSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-640h206l74-80h240l74 80h206v640H80Zm160-160h480L570-480 450-320l-90-120-120 160Z" />
  </svg>
)

export { IconPhotoCameraBackSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconUnknownMedSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-440v-120h360v120H80Zm440 0v-120h360v120H520Z" />
  </svg>
)

export { IconUnknownMedSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconGoToLineRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-680q-25 0-42.5-17.5T420-740q0-25 17.5-42.5T480-800q25 0 42.5 17.5T540-740q0 25-17.5 42.5T480-680Zm0 520q-25 0-42.5-17.5T420-220q0-25 17.5-42.5T480-280q25 0 42.5 17.5T540-220q0 25-17.5 42.5T480-160Z" />
  </svg>
)

export { IconGoToLineRoundedFilled as default }

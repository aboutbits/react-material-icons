import React from 'react'
import { IconProps } from './types'

const IconDonutSmallSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M593-520q-9-26-27.5-45.5T521-594v-284q143 14 243.5 114.5T879-520H593ZM441-82Q287-97 184-211T81-480q0-155 103-269t257-129v284q-36 13-58 44.5T361-480q0 38 22 68.5t58 43.5v286Zm80 0v-286q26-9 44.5-27.5T593-440h286q-14 143-114.5 243.5T521-82Z" />
  </svg>
)

export { IconDonutSmallSharpFilled as default }

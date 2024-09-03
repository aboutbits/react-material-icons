import React from 'react'
import { IconProps } from './types'

const IconLooks4Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm320-80h80v-400h-80v160h-80v-160h-80v240h160v160Z" />
  </svg>
)

export { IconLooks4Sharp as default }

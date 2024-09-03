import React from 'react'
import { IconProps } from './types'

const Icon4gPlusMobiledataSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-360v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-600 80v-120H40v-280h80v200h80v-200h80v200h40v80h-40v120h-80Zm160 0v-400h320v80H440v240h160v-80h-80v-80h160v240H360Z" />
  </svg>
)

export { Icon4gPlusMobiledataSharpFilled as default }

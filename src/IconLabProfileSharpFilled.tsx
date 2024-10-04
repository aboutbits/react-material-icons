import React from 'react'
import { IconProps } from './types'

const IconLabProfileSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-480h320v-80H320v80Zm0-160h320v-80H320v80Zm480 502L599-400H160v-480h640v742ZM160-80v-240h400L744-80H160Z" />
  </svg>
)

export { IconLabProfileSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconDomainAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-720h400v160h400v320h-80v-240H480v80h80v80h-80v80h80v80h-80v80h160v80H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM800-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM640-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
  </svg>
)

export { IconDomainAddSharp as default }

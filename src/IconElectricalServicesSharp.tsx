import React from 'react'
import { IconProps } from './types'

export const IconElectricalServicesSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-360v-80h120v80H720Zm0 160v-80h120v80H720Zm-240 40v-80h-80v-160h80v-80h200v320H480ZM120-280v-320h280v-120H160v-80h320v280H200v160h160v80H120Z" />
  </svg>
)

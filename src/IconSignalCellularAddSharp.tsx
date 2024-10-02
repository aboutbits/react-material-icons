import React from 'react'
import { IconProps } from './types'

export const IconSignalCellularAddSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 799-799v425q-18-11-38-17.5T799-482v-204L273-160h255q8 23 20 43t27 37H80Zm640 0v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-447-80 526-526-136.5 136.5-121 121L418-305 273-160Z" />
  </svg>
)

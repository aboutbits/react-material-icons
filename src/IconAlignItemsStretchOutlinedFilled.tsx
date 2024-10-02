import React from 'react'
import { IconProps } from './types'

export const IconAlignItemsStretchOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240v-480h120v480H280Zm280 0v-480h120v480H560ZM80-800v-80h800v80H80Zm0 720v-80h800v80H80Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconBrowseActivitySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-80h880v80H40Zm40-120v-280h215l80 160h48l135-235 37 75h285v280H80Zm323-245-59-115H80v-240h800v240H645l-60-120h-48L403-485Z" />
  </svg>
)

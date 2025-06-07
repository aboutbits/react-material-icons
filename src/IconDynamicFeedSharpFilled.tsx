import React from 'react'
import { IconProps } from './types.js'

export const IconDynamicFeedSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-360h80v280h360v80H80Zm160-160v-360h80v280h360v80H240Zm160-160v-400h480v400H400Zm80-80h320v-160H480v160Z" />
  </svg>
)

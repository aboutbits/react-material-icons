import React from 'react'
import { IconProps } from './types.js'

export const IconBrowserUpdatedSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80l40-40H80v-600h400v80H160v440h640v-120h80v200H680l40 40v80H240Zm360-240L400-560l56-56 104 103v-327h80v327l104-103 56 56-200 200Z" />
  </svg>
)

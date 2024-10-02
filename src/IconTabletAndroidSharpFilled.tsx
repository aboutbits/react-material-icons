import React from 'react'
import { IconProps } from './types'

export const IconTabletAndroidSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-40v-880h720v880H120Zm280-120h160v-40H400v40ZM200-320h560v-400H200v400Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconFontDownloadSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M256-240h84l44-122h192l44 122h84L522-720h-84L256-240Zm152-192 70-198h4l70 198H408ZM80-80v-800h800v800H80Z" />
  </svg>
)

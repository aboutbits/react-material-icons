import React from 'react'
import { IconProps } from './types.js'

export const IconCollectionsBookmarkSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320h480v-480h-80v280l-100-60-100 60v-280H320v480Zm-80 80v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Zm200 280 100-60 100 60-100-60-100 60Z" />
  </svg>
)

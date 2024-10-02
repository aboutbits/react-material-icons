import React from 'react'
import { IconProps } from './types'

export const IconFormatInkHighlighterOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80 0v-160h800V0H80Zm344-640 216 217-160 160q-24 24-56.5 24T367-263l-27 23H140l126-125q-24-24-25-57.5t23-57.5l160-160Zm56-57 160-159q24-24 56.5-24t56.5 24l104 103q24 24 24 56.5T857-640L697-480 480-697Z" />
  </svg>
)

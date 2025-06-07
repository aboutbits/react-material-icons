import React from 'react'
import { IconProps } from './types.js'

export const IconFormatInkHighlighterSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80 0v-160h800V0H80Zm60-240 126-126-30-29v-57l188-188 216 217-188 187h-56l-30-30-26 26H140Zm340-457 217-216 216 217-216 216-217-217Z" />
  </svg>
)

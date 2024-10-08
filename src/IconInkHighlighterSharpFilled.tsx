import React from 'react'
import { IconProps } from './types'

const IconInkHighlighterSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m60-120 126-126-30-30v-56l228-228 216 216-228 228h-56l-30-30-26 26H60Zm381-497 255-255 216 216-255 255-216-216Z" />
  </svg>
)

export { IconInkHighlighterSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconInkHighlighterMoveSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m100-120 126-126-30-30v-56l228-228 216 216-228 228h-56l-30-30-26 26H100Zm381-497 255-255 216 216-255 255-216-216Zm70-183H280v-80h351l-80 80ZM391-640H160v-80h311l-80 80ZM231-480H40v-80h271l-80 80Z" />
  </svg>
)

export { IconInkHighlighterMoveSharpFilled as default }

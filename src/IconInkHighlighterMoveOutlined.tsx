import React from 'react'
import { IconProps } from './types'

const IconInkHighlighterMoveOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M551-800H280v-80h351l-80 80ZM391-640H160v-80h311l-80 80ZM231-480H40v-80h271l-80 80Zm353 80L480-504 280-304l104 104 200-200Zm-47-161 104 104 199-199-104-104-199 199Zm-84-28 216 216-229 229q-24 24-56 24t-56-24l-2-2-26 26H100l126-126-2-2q-24-24-24-56t24-56l229-229Zm0 0 227-227q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L669-373 453-589Z" />
  </svg>
)

export { IconInkHighlighterMoveOutlined as default }
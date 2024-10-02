import React from 'react'
import { IconProps } from './types'

export const IconTextureSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M123-123v-56l658-658h57v56L179-123h-56Zm-3-249v-112l356-356h112L120-372Zm0-308v-160h160L120-680Zm560 560 160-160v160H680Zm-308 0 468-468v112L484-120H372Z" />
  </svg>
)

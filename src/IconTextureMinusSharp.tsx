import React from 'react'
import { IconProps } from './types'

export const IconTextureMinusSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M176-120h-56v-56l664-664h57v56L176-120Zm196 0 108-108v108H372Zm188-80v-80h320v80H560ZM120-372v-112l356-356h112L120-372Zm492 12 228-228v112L724-360H612ZM120-680v-160h160L120-680Z" />
  </svg>
)

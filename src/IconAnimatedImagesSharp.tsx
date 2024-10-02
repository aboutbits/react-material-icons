import React from 'react'
import { IconProps } from './types'

export const IconAnimatedImagesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-420 240-160-240-160v320Zm33 220h217l7 53-589 72-74-597 126-14v80l-36 5 54 437 295-36Zm-233-80v-600h600v600H280Zm80-80h440v-440H360v440ZM218-164Zm362-416Z" />
  </svg>
)

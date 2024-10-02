import React from 'react'
import { IconProps } from './types'

export const IconStackHexagonSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m580-420 140-80v-160l-140-80-140 80v160l140 80Zm-67 220h217l7 53-589 72-74-597 126-14v80l-36 5 54 437 295-36Zm-233-80v-600h600v600H280Zm80-80h440v-440H360v440ZM218-164Zm362-416Z" />
  </svg>
)

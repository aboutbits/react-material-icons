import React from 'react'
import { IconProps } from './types'

export const IconPrintAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-560h640-640Zm80 440v-160H80v-360h800v150q-18-10-38-17t-42-10v-43H160v200h80v-80h340q-16 17-29 37t-21 43H320v160h204q7 22 17 42t24 38H240Zm400-520v-120H320v120h-80v-200h480v200h-80Zm80 520v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
  </svg>
)

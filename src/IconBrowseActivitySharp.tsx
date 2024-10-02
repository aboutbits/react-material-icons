import React from 'react'
import { IconProps } from './types'

export const IconBrowseActivitySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-600v-240h800v240h-80v-160H160v160H80Zm0 360v-280h80v200h640v-200h80v280H80Zm0-280v-80h264l59 115 134-235h48l60 120h235v80H595l-37-75-135 235h-48l-80-160H80ZM40-120v-80h880v80H40Zm440-420Z" />
  </svg>
)

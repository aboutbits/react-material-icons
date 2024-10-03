import React from 'react'
import { IconProps } from './types.js'

export const IconFormatListNumberedRtlSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80v-60h100v-30h-60v-60h60v-30H680v-60h160v90l-40 30 40 30v90H680Zm0-280v-150h100v-30H680v-60h160v150H740v30h100v60H680Zm60-280v-180h-60v-60h120v240h-60ZM120-200v-80h480v80H120Zm0-240v-80h480v80H120Zm0-240v-80h480v80H120Z" />
  </svg>
)

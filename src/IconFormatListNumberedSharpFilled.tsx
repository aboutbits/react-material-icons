import React from 'react'
import { IconProps } from './types.js'

export const IconFormatListNumberedSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h160v90l-40 30 40 30v90H120Zm0-280v-150h100v-30H120v-60h160v150H180v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z" />
  </svg>
)

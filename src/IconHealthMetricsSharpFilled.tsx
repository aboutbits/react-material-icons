import React from 'react'
import { IconProps } from './types.js'

export const IconHealthMetricsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-200H80v-160h258l68 103h72l54-173 46 70h302v160H680v200H280Zm148-370-47-70H80v-160h200v-200h400v200h200v160H621l-68-102h-71l-54 172Z" />
  </svg>
)

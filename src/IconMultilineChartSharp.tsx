import React from 'react'
import { IconProps } from './types.js'

export const IconMultilineChartSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m136-220-56-58 300-300 160 160 116-130q-51-60-120-95t-152-35q-71 0-134 26.5T136-580l-56-58q62-56 139-88t165-32q98 0 181 39.5T710-608l114-130 56 58-120 136q33 53 53.5 115T840-298h-80q-6-50-20.5-95.5T702-480L544-302 380-464 136-220Z" />
  </svg>
)

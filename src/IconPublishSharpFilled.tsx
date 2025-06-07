import React from 'react'
import { IconProps } from './types.js'

export const IconPublishSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-160v-326L336-382l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-600v-200h640v200h-80v-120H240v120h-80Z" />
  </svg>
)

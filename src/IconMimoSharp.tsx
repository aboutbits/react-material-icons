import React from 'react'
import { IconProps } from './types'

const IconMimoSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80l40-40H80v-600h800v600H680l40 40v80H240Zm-80-200h640v-440H160v440Zm0 0v-440 440Z" />
  </svg>
)

export { IconMimoSharp as default }
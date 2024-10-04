import React from 'react'
import { IconProps } from './types'

const IconSettingsInputComponentSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-40v-166l-80-80v-114h240v114l-80 80v166h-80Zm320 0v-166l-80-80v-114h240v114l-80 80v166h-80Zm320 0v-166l-80-80v-114h240v114l-80 80v166h-80ZM40-480v-240h80v-200h80v200h80v240H40Zm320 0v-240h80v-200h80v200h80v240H360Zm320 0v-240h80v-200h80v200h80v240H680Z" />
  </svg>
)

export { IconSettingsInputComponentSharpFilled as default }

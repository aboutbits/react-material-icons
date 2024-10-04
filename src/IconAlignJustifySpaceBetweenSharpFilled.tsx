import React from 'react'
import { IconProps } from './types'

const IconAlignJustifySpaceBetweenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z" />
  </svg>
)

export { IconAlignJustifySpaceBetweenSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconHPlusMobiledataBadgeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M180-280h80v-160h160v160h80v-400h-80v160H260v-160h-80v400Zm440-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM40-120v-720h880v720H40Z" />
  </svg>
)

export { IconHPlusMobiledataBadgeSharpFilled as default }

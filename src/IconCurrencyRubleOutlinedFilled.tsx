import React from 'react'
import { IconProps } from './types.js'

export const IconCurrencyRubleOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-120h-80v-80h80v-80h-80v-80h80v-360h260q92 0 156 64t64 156q0 92-64 156t-156 64H360v80h160v80H360v120h-80Zm80-360h180q58 0 99-41t41-99q0-58-41-99t-99-41H360v280Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types'

const IconCurrencyFrancOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-120h-80v-80h80v-520h440v80H360v240h320v80H360v120h160v80H360v120h-80Z" />
  </svg>
)

export { IconCurrencyFrancOutlinedFilled as default }

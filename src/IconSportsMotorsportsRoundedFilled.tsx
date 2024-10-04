import React from 'react'
import { IconProps } from './types.js'

export const IconSportsMotorsportsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M579-182H96q-5 0-9-4t-4-9q0-47 1.5-82.5T89-341h314q69 0 117.5-49T569-510q0-51-28.5-92.5T464-664l-134-53q54-30 113.5-45.5T567-778q128 0 219 86.5T877-480q0 125-86.5 211.5T579-182ZM102-420q20-71 59-133.5T254-664l180 73q26 11 41 33t15 48q0 38-25.5 64T401-420H102Z" />
  </svg>
)
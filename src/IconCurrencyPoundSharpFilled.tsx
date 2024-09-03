import React from 'react'
import { IconProps } from './types'

const IconCurrencyPoundSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80l16.5-10q16.5-10 36-29.5t35.5-50q16-30.5 16-70.5 0-11-1.5-21t-3.5-19h-99v-80h60q-21-33-40.5-69.5T240-640q0-92 64-156t156-64q71 0 126 39t79 101l-74 31q-15-40-50.5-65.5T460-780q-58 0-99 41t-41 99q0 48 24 80t49 80h167v80H421q2 9 2.5 19t.5 21q0 50-17.5 90T364-200h196q40 0 61-21t29-54l70 35q-11 55-56.5 87.5T560-120H240Z" />
  </svg>
)

export { IconCurrencyPoundSharpFilled as default }

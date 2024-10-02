import React from 'react'
import { IconProps } from './types'

export const IconHealthAndBeautySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-80v-80h160v-80H640v-80h160v-80H640v-80h160v-80H640v-80h160v-80H640v-80h280v720H640Zm-440 0L40-520l200-120v-240h160v240l200 120L440-80H200Z" />
  </svg>
)

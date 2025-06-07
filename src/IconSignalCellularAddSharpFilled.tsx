import React from 'react'
import { IconProps } from './types.js'

export const IconSignalCellularAddSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-80v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM80-80l799-799v425q-27-16-57.5-23.5T760-485q-102 0-173.5 71.5T515-240q0 46 15 85.5T575-80H80Z" />
  </svg>
)

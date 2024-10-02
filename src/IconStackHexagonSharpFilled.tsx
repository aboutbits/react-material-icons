import React from 'react'
import { IconProps } from './types'

export const IconStackHexagonSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m580-420 140-80v-160l-140-80-140 80v160l140 80ZM148-75 74-672l126-14v486h532l5 53-589 72Zm132-205v-600h600v600H280Z" />
  </svg>
)

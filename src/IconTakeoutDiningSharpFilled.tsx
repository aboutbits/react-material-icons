import React from 'react'
import { IconProps } from './types'

export const IconTakeoutDiningSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M185-560 80-662l56-56 64 64-2-24 162-162h240l162 162-2 24 64-64 56 56-105 102H185Zm53 400-26-338h536l-26 338H238Z" />
  </svg>
)

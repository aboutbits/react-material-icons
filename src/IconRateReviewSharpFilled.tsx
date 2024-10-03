import React from 'react'
import { IconProps } from './types.js'

export const IconRateReviewSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400h123l241-242-120-123-244 242v123Zm242-204-38-37 39-39 37 38-38 38Zm-34 204h272v-80H528l-80 80ZM80-80v-800h800v640H240L80-80Z" />
  </svg>
)

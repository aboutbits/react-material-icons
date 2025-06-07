import React from 'react'
import { IconProps } from './types.js'

export const IconCloseSmallOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M335.28-279 279-335l144.72-145L279-624l56.28-56L480-535.39 623.72-680 680-624 535.28-480 680-335l-56.28 56L480-423.61 335.28-279Z" />
  </svg>
)

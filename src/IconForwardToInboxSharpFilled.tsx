import React from 'react'
import { IconProps } from './types'

export const IconForwardToInboxSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m760-40-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM80-160v-640h800v392q-27-16-57.5-24t-62.5-8q-100 0-170 70t-70 170v40H80Zm400-280 320-200v-80L480-520 160-720v80l320 200Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconCardTravelSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-600h200v-160h400v160h200v600H80Zm280-600h240v-80H360v80ZM160-280h640v-120H160v120Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconCallReceivedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z" />
  </svg>
)

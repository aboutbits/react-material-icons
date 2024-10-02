import React from 'react'
import { IconProps } from './types'

export const IconSwipeRightSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-680q30-106 142-173t258-67q94 0 181 31t159 90v-81h60v200H680v-60h116q-66-58-147-89t-169-31q-118 0-208.5 48T143-680H80ZM423-80 184-320l63-65 113 32v-367h80v320h40v-160h80v160h40v-120h80v120h40v-40h80v360H423Z" />
  </svg>
)

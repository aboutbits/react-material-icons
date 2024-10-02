import React from 'react'
import { IconProps } from './types'

export const IconCreditScoreSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M598-80 428-250l56-56 114 112 226-226 56 58L598-80ZM160-480h640v-160H160v160ZM80-160v-640h800v320H771L598-307 485-420 315-250l9 10v80H80Z" />
  </svg>
)

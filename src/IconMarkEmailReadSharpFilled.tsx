import React from 'react'
import { IconProps } from './types'

export const IconMarkEmailReadSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M638-80 468-250l56-56 114 114 226-226 56 56L638-80ZM80-160v-640h800v254L639-305 524-420 355-251l91 91H80Zm400-280 320-200v-80L480-520 160-720v80l320 200Z" />
  </svg>
)

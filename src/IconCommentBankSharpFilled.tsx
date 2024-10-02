import React from 'react'
import { IconProps } from './types'

export const IconCommentBankSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m500-520 100-60 100 60v-280H500v280ZM80-80v-800h800v640H240L80-80Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconHighlighterSize3SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M310-170 169-311q-11-11-11-28t11-28l423-424q12-12 29-12t28 12l141 142q11 11 11 28t-11 28L367-170q-12 12-28.5 12T310-170Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconRemoveDoneRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M845-116 609-352l-86 86q-12 12-28 12t-28-12L297-436q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T354-493l141 141 56-56-386-386q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T222-851l679 679q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM241-266 71-436q-11-11-11-28t11-28q11-11 28-11t28 11l142 142 56 56-28 28q-12 12-28 12t-28-12Zm480-198-56-56 169-169q11-11 27-11.5t28 10.5q12 11 12.5 28T890-633L721-464ZM607-578l-56-56 58-58q11-11 28-11t28 11q11 11 11 28t-11 28l-58 58Z" />
  </svg>
)
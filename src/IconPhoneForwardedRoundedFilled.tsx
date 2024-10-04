import React from 'react'
import { IconProps } from './types.js'

export const IconPhoneForwardedRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Zm-72-560H560q-17 0-28.5-11.5T520-720q0-17 11.5-28.5T560-760h166l-34-34q-11-11-11.5-27.5T691-850q12-12 29-12.5t29 11.5l103 105q12 12 12 28t-12 28L748-588q-12 11-28 11t-28-11q-12-12-12.5-28.5T691-645l35-35Z" />
  </svg>
)
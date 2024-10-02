import React from 'react'
import { IconProps } from './types'

export const IconApprovalDelegationSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M517-518 347-688l57-56 113 113 227-226 56 56-283 283Zm43 458-280-78v58H40v-440h318l322 120v80h200v160L560-60ZM120-160h80v-280h-80v280Zm438 16 238-74v-22H513l-125-42 24-76 117 38h71v-26l-256-94h-64v220l278 76Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconFormatColorResetRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M706-658q44 42 69 99.5T800-436q0 21-3 41t-8 40q-5 18-24 22.5t-33-9.5L364-710q-12-12-11.5-28t12.5-28l73-73q9-9 20-13t22-4q11 0 22 4.5t20 12.5l184 181ZM480-120q-133 0-226.5-92.5T160-436q0-51 16-98t48-90L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-96-96q-41 29-88 44.5T480-120Z" />
  </svg>
)

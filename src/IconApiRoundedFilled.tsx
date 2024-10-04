import React from 'react'
import { IconProps } from './types'

const IconApiRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l128-128q12-12 27-18t30-6q15 0 30 6t27 18l128 128-100 100-85-85-85 85ZM225-295 97-423q-12-12-18-27t-6-30q0-15 6-30t18-27l128-128 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 128 128q12 12 18 27t6 30q0 15-6 30t-18 27L735-295ZM423-97 295-225l100-100 85 85 85-85 100 100L537-97q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z" />
  </svg>
)

export { IconApiRoundedFilled as default }

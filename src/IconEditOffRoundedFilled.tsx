import React from 'react'
import { IconProps } from './types.js'

export const IconEditOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-704q0 16-5.5 30.5T817-647L650-481q-12 12-28 12t-28-12L481-594q-12-12-12-28t12-28l167-167q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30ZM764-84 509-338 313-143q-11 11-25.5 17t-30.5 6h-97q-17 0-28.5-11.5T120-160v-96q0-16 6-30.5t17-25.5l196-196L84-764q-12-12-11.5-28T85-820q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28.5T820-84q-12 12-28 12t-28-12Zm-60-564 56-56-56-56-56 56 56 56Z" />
  </svg>
)

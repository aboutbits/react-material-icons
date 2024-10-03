import React from 'react'
import { IconProps } from './types.js'

export const IconApprovalDelegationRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m535-87-255-72v-361h64q7 0 14 1.5t14 3.5l277 103q14 5 22.5 18t8.5 27q0 21-14.5 34T632-320H527q-5 0-7.5-.5T513-323l-45-17q-8-3-16 1t-10 11q-2 8 1 15t11 10l59 21q2 1 6 1.5t7 .5h274q32 0 56 23t24 57L585-89q-10 4-24.5 4.5T535-87ZM40-160v-280q0-33 23.5-56.5T120-520q33 0 56.5 23.5T200-440v280q0 33-23.5 56.5T120-80q-33 0-56.5-23.5T40-160Zm477-471 199-198q11-11 27.5-11.5T772-829q11 11 11 28t-11 28L545-546q-12 12-28 12t-28-12L375-660q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l85 85Z" />
  </svg>
)

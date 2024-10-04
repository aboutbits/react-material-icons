import React from 'react'
import { IconProps } from './types.js'

export const IconAirlineSeatIndividualSuiteOutlinedFilled: React.FC<
  IconProps
> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-280v-400h80v320h320v-320h320q66 0 113 47t47 113v240H40Zm240-120q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
  </svg>
)

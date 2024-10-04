import React from 'react'
import { IconProps } from './types'

const IconNephrologyOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-120v-167q-10 4-19.5 5.5T320-280q-100 0-170-70T80-520v-80q0-100 70-170t170-70q50 0 85 35t35 85q0 50-35 85t-85 35v80q50 0 85 35t35 85v280h-80Zm160 0v-280q0-50 35-85t85-35v-80q-50 0-85-35t-35-85q0-50 35-85t85-35q100 0 170 70t70 170v80q0 100-70 170t-170 70q-11 0-20.5-1.5T600-287v167h-80Z" />
  </svg>
)

export { IconNephrologyOutlinedFilled as default }

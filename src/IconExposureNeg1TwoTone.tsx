import React from 'react'
import { IconProps } from './types'

const IconExposureNeg1TwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z" />
  </svg>
)

export { IconExposureNeg1TwoTone as default }

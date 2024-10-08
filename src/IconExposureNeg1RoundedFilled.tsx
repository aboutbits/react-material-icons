import React from 'react'
import { IconProps } from './types'

const IconExposureNeg1RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400H160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h200q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm270-238-57 41q-14 11-31.5 7.5T514-608q-9-14-6-30.5t17-26.5l123-89q4-3 8.5-4.5t9.5-1.5h22q14 0 23 9t9 23v483q0 19-13 32t-32 13q-19 0-32-13t-13-32v-393Z" />
  </svg>
)

export { IconExposureNeg1RoundedFilled as default }

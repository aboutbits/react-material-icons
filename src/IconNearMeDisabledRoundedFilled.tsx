import React from 'react'
import { IconProps } from './types'

const IconNearMeDisabledRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M507-143 402-402 143-507q-13-5-19-15.5t-6-21.5q0-11 6.5-21.5T144-581l171-64-175-175q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T820-141L645-315l-64 171q-5 13-15.5 19.5T544-118q-11 0-21.5-6T507-143Zm294-658q8 8 11 19.5t-2 23.5l-81 219q-8 20-29 25t-37-11L525-663q-16-16-11-37t25-29l219-81q12-5 23.5-2t19.5 11Z" />
  </svg>
)

export { IconNearMeDisabledRoundedFilled as default }

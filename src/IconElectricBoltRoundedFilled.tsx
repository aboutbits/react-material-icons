import React from 'react'
import { IconProps } from './types'

const IconElectricBoltRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m440-380-237-30q-25-3-32.5-27t10.5-41l409-392q5-5 12-7.5t19-2.5q20 0 30.5 17t.5 35L520-580l237 30q25 3 32.5 27T779-482L370-90q-5 5-12 7.5T339-80q-20 0-30.5-17t-.5-35l132-248Z" />
  </svg>
)

export { IconElectricBoltRoundedFilled as default }

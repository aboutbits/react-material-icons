import React from 'react'
import { IconProps } from './types'

const IconWaterDamageSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v-366L88-440l-47-63 439-337 440 336-48 64-112-86v366H200Zm280-160q33 0 56.5-23.5T560-400q0-27-15-57.5T480-560q-50 72-65 102.5T400-400q0 33 23.5 56.5T480-320Z" />
  </svg>
)

export { IconWaterDamageSharpFilled as default }

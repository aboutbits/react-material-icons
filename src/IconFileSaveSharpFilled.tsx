import React from 'react'
import { IconProps } from './types'

const IconFileSaveSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560 0v-80h320V0H560Zm160-120L560-280l56-56 64 64v-167h80v167l64-64 56 56-160 160Zm-560-40v-720h360l240 240v121H480v359H160Zm320-440h200L480-800v200Z" />
  </svg>
)

export { IconFileSaveSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

export const IconFileSaveOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560 0v-80h320V0H560Zm160-120L560-280l56-56 64 64v-167h80v167l64-64 56 56-160 160Zm-480-40q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h280l240 240v121H480v359H240Zm240-440h200L480-800v200Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconHomeSpeakerRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m248-480 31-233q2-11 8.5-19.5T304-745l316-126q18-8 35 2.5t19 30.5l43 358H248Zm135 360q-73 0-121-54.5T224-301l13-99h489l12 101q8 72-39 125.5T580-120H383Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconViewObjectTrackOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-160q-58 0-99-41t-41-99q0-58 41-99t99-41h440q58 0 99 41t41 99q0 58-41 99t-99 41H300Zm-80-360q-58 0-99-41t-41-99q0-58 41-99t99-41h440q58 0 99 41t41 99q0 58-41 99t-99 41H220Z" />
  </svg>
)

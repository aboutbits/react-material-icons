import React from 'react'
import { IconProps } from './types.js'

export const IconLocationHomeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-200h480v-11q0-14-6-26t-18-19q-49-31-103.5-47.5T480-320q-58 0-112.5 16.5T264-256q-12 7-18 19t-6 26v11Zm-80 80v-480l320-240 320 240v480H160Z" />
  </svg>
)

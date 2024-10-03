import React from 'react'
import { IconProps } from './types.js'

export const IconAirlineSeatFlatAngledOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m362-451 96-263 338 123q63 23 91 82.5t5 122.5l-41 113-489-178Zm144-160q-8 20-14.5 37.5T478-536l-13 37 41-112ZM58-434l27-75 752 274-27 75L58-434Zm195-64q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T293-618q0-17-11.5-28.5T253-658q-17 0-28.5 11.5T213-618q0 17 11.5 28.5T253-578Zm212 79 338 124 14-38q11-32-2.5-62T769-516l-263-95-41 112ZM253-617Z" />
  </svg>
)

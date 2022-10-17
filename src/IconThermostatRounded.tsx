import React from 'react'
import { IconProps } from './types'

const IconThermostatRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-2-2h-2V5c0-.55.45-1 1-1s1 .45 1 1h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h.5v2h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h.5v2z" />
  </svg>
)

export { IconThermostatRounded as default }

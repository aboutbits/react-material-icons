import React from 'react'
import { IconProps } from './types'

const IconChecklistRtlRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m654-313 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L683-228q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm0-320 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L683-548q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57ZM120-280q-17 0-28.5-11.5T80-320q0-17 11.5-28.5T120-360h280q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H120Zm0-320q-17 0-28.5-11.5T80-640q0-17 11.5-28.5T120-680h280q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H120Z" />
  </svg>
)

export { IconChecklistRtlRoundedFilled as default }

import React from 'react'
import { IconProps } from './types'

export const IconHeadsetOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M844-234 604-474v-6h160v-40q0-118-82-199t-198-81q-44 0-83.5 12.5T328-752l-58-56q45-35 99.5-53.5T484-880q74 0 139.5 28T738-775q49 49 77.5 114.5T844-520v286ZM820-24l-16-16H484v-80h240l-40-40h-80v-80L223-621q-9 24-14 49t-5 52v40h160v320H124v-360q0-45 9.5-84.5T163-682L28-817l57-56L876-81l-56 57Z" />
  </svg>
)

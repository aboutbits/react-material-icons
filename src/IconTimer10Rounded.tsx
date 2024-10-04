import React from 'react'
import { IconProps } from './types'

const IconTimer10Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-320h120v-320H560v320Zm0 120q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h120q50 0 85 35t35 85v320q0 50-35 85t-85 35H560ZM240-640h-20q-25 0-42.5-17.5T160-700q0-25 17.5-42.5T220-760h100q17 0 28.5 11.5T360-720v460q0 25-17.5 42.5T300-200q-25 0-42.5-17.5T240-260v-380Z" />
  </svg>
)

export { IconTimer10Rounded as default }

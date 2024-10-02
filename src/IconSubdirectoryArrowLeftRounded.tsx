import React from 'react'
import { IconProps } from './types'

export const IconSubdirectoryArrowLeftRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m313-320 115 115q12 12 12.5 28T429-149q-12 12-28.5 12T372-149L188-332q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l185-185q12-12 28-11.5t28 12.5q11 12 11.5 28T429-516L313-400h367v-360q0-17 11.5-28.5T720-800q17 0 28.5 11.5T760-760v360q0 33-23.5 56.5T680-320H313Z" />
  </svg>
)

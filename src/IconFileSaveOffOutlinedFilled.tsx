import React from 'react'
import { IconProps } from './types'

export const IconFileSaveOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560 0v-80h207L480-367v207H240q-33 0-56.5-23.5T160-240v-447L28-820l56-56L880-80V0H560Zm276-236-56-57 44-44 56 57-44 44Zm-76-77-80-80v-47h80v127ZM553-520 202-870q9-5 18-7.5t20-2.5h280l240 240v120H553Zm-73-80h200L480-800v200Z" />
  </svg>
)

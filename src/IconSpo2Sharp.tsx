import React from 'react'
import { IconProps } from './types'

const IconSpo2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-160v-240h180v240H440Zm60-60h60v-120h-60v120ZM680-80v-150h120v-30H680v-60h180v150H740v30h120v60H680Zm-320-2Q237-96 158.5-187.5T80-408q0-100 79.5-217.5T400-880q132 112 209.5 212T710-480h-83q-22-63-79-137T400-774Q281-665 220.5-573T160-408q0 96 55.5 163.5T360-163v81Zm34-326Z" />
  </svg>
)

export { IconSpo2Sharp as default }

import React from 'react'
import { IconProps } from './types'

const IconKitchenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2.01 4 2v20h16V2.01zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8V5zm0 7h2v5H8v-5z" />
  </svg>
)

export { IconKitchenSharp as default }

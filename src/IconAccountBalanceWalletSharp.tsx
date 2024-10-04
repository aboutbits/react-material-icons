import React from 'react'
import { IconProps } from './types'

const IconAccountBalanceWalletSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-560 560Zm640-460h-80v-100H200v560h560v-100h80v180H120v-720h720v180ZM440-280v-400h440v400H440Zm200-140q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Zm160 60v-240H520v240h280Z" />
  </svg>
)

export { IconAccountBalanceWalletSharp as default }

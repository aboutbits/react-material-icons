import React from 'react'
import { IconProps } from './types'

const IconCribSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400h480v-120H400v-200h-80q-33 0-56.5 23.5T240-640v240Zm240 240q20 0 40-2.5t40-7.5v-150H400v150q20 5 40 7.5t40 2.5Zm0 80q-80 0-153-30.5T197-197l57-57q15 15 31.5 27.5T320-203v-117H160v-320q0-66 47-113t113-47h160v200h320v280H640v117q18-11 34.5-23.5T706-254l57 57q-57 56-130 86.5T480-80Zm-80-440Z" />
  </svg>
)

export { IconCribSharp as default }

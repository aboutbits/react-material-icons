import React from 'react'
import { IconProps } from './types'

export const IconDetectorSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-88 0-168.5-33T169-249l57-57q51 51 117 78.5T481-200q72 0 137.5-27T735-305l56 56q-63 63-143 96t-168 33Zm0-160q-56 0-107-21t-91-61l56-56q29 29 65.5 43.5T480-360q40 0 76.5-14.5T622-418l56 56q-40 40-91 61t-107 21ZM324-640l12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Z" />
  </svg>
)

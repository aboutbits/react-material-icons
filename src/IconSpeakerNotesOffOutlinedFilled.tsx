import React from 'react'
import { IconProps } from './types'

export const IconSpeakerNotesOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 606-240H240L80-80v-700h100l260 260H328L28-820l56-56L876-84l-56 56Zm8-218L554-520h166v-80H474l-40-40h286v-80H400v46L194-880h606q33 0 56.5 23.5T880-800v480q0 26-14.5 45.5T828-246ZM280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Z" />
  </svg>
)

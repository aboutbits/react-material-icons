import React from 'react'
import { IconProps } from './types'

const IconTranscribeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M722-322q-56-53-89-125t-33-153q0-81 33-153t89-125l62 64q-44 41-69 96t-25 118q0 63 25 119t69 97l-62 62Zm128-128q-32-29-50-67.5T782-600q0-44 18-82.5t50-67.5l64 64q-18 17-29 38.5T874-600q0 26 11 47.5t29 38.5l-64 64Zm-490 10q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H40Z" />
  </svg>
)

export { IconTranscribeOutlinedFilled as default }

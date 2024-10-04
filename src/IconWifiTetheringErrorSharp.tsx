import React from 'react'
import { IconProps } from './types'

const IconWifiTetheringErrorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M204-150q-57-55-90.5-129.5T80-440q0-83 31.5-156T197-723q54-54 127-85.5T480-840q112 0 203 54.5T827-640h-97q-45-55-109.5-87.5T480-760q-134 0-227 93t-93 227q0 69 27 129t74 104l-57 57Zm113-113q-35-33-56-78.5T240-440q0-100 70-170t170-70q100 0 170 70t70 170q0 53-21 99t-56 78l-57-57q25-23 39.5-54t14.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66.5T374-320l-57 57Zm163-97q-33 0-56.5-23.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 33-23.5 56.5T480-360Zm360 200q-17 0-28.5-11.5T800-200q0-17 11.5-28.5T840-240q17 0 28.5 11.5T880-200q0 17-11.5 28.5T840-160Zm-40-160v-240h80v240h-80Z" />
  </svg>
)

export { IconWifiTetheringErrorSharp as default }

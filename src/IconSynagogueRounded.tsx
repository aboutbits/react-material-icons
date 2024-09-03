import React from 'react'
import { IconProps } from './types'

const IconSynagogueRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-480q0-50 35-85t85-35q50 0 85 35t35 85v12l148-127q11-10 24.5-14.5T480-814q14 0 27.5 4.5T532-795l148 127v-12q0-50 35-85t85-35q50 0 85 35t35 85v480q0 33-23.5 56.5T840-120H540q-8 0-14-6t-6-14v-180q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320v180q0 8-6 14t-14 6H120q-33 0-56.5-23.5T40-200Zm720-440h80v-40q0-17-11.5-28.5T800-720q-17 0-28.5 11.5T760-680v40Zm-640 0h80v-40q0-17-11.5-28.5T160-720q-17 0-28.5 11.5T120-680v40Zm0 440h80v-360h-80v360Zm160 0h80v-120q0-50 35-85t85-35q50 0 85 35t35 85v120h80v-363L480-735 280-563v363Zm480 0h80v-360h-80v360ZM480-500q-25 0-42.5-17.5T420-560q0-25 17.5-42.5T480-620q25 0 42.5 17.5T540-560q0 25-17.5 42.5T480-500Z" />
  </svg>
)

export { IconSynagogueRounded as default }

import React from 'react'
import { IconProps } from './types'

const IconTamperDetectionOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-260 720-420v68l-80-80v-288H352l-80-80h368q33 0 56.5 23.5T720-720v180l160-160v440ZM80-600v-120q0-33 23.5-56.5T160-800l80 80h-80v120H80Zm480 440v-80h80v-80l80 80q0 33-23.5 56.5T640-160h-80ZM822-26 26-822l56-56L878-82l-56 56ZM460-500Zm36-76ZM178-40q-17 0-31.5-6.5T121-64L0-184l14-14q8-8 19-13t23-5q12 0 23 4.5T98-198l22 22v-294q0-13 9-21.5t21-8.5q13 0 21.5 8.5T180-470v150h40v-210q0-13 9-21.5t21-8.5q13 0 21.5 8.5T280-530v210h40v-170q0-13 9-21.5t21-8.5q13 0 21.5 8.5T380-490v170h40v-130q0-13 9-21.5t21-8.5q13 0 21.5 8.5T480-450v330q0 33-23 56.5T400-40H178Z" />
  </svg>
)

export { IconTamperDetectionOffOutlined as default }

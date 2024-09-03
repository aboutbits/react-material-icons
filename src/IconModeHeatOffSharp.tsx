import React from 'react'
import { IconProps } from './types'

const IconModeHeatOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480Zm0 0Zm0 0Zm0 0ZM791-55 55-791l57-57 368 368 368 368-57 57Zm-21-250-61-61q5-18 8-36.5t3-37.5q0-50-18.5-94.5T648-614q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-730q-8 6-15 12.5T371-704l-57-57q35-34 76.5-63.5T480-880v132q0 34 23.5 57t57.5 23q18 0 33.5-8t27.5-22l18-22q74 42 117 117t43 163q0 36-7.5 70T770-305ZM480-120q-134 0-227-93t-93-227q0-69 25.5-134.5T259-700l57 57q-38 50-57 101t-19 102q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l103-100 57 57-104 100q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6.5-29T536-331l46-46 143 143q-45 53-107.5 83.5T480-120Z" />
  </svg>
)

export { IconModeHeatOffSharp as default }

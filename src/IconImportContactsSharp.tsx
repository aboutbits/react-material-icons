import React from 'react'
import { IconProps } from './types'

export const IconImportContactsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-53 0-111 20T40-158v-580q44-30 103.5-46T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q57 0 116.5 16T920-738v580q-50-42-108.5-62T700-240q-60 0-116 21t-104 59ZM280-499Z" />
  </svg>
)

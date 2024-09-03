import React from 'react'
import { IconProps } from './types'

const IconBedroomBabySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-240q80 0 152-30t128-86l-42-42q-11 11-21.5 19.5T674-362l-34-58v-100h40v-40H456l-70-120H240l40 30-60 70 38 40 62-40v160l-34 58q-12-8-22.5-16.5T242-398l-42 42q56 56 128 86t152 30Zm0-60q-38 0-73.5-7.5T338-332l34-58q26 10 53.5 14.5T480-371q28 0 55-4.5t53-14.5l34 58q-33 15-68.5 23.5T480-300ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z" />
  </svg>
)

export { IconBedroomBabySharp as default }

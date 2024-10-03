import React from 'react'
import { IconProps } from './types.js'

export const IconAutoStoriesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q-48-38-104-59t-116-21q-59 0-114 18.5T40-173v-565q48-34 104.5-48T260-800q58 0 114 15t106 45v484q50-31 105.5-47.5T700-320q36 0 71 6t69 18v-480q21 7 41.5 16t38.5 22v565q-51-30-106-48.5T700-240q-60 0-116 21t-104 59Zm80-200v-380l200-200v400L560-360Zm-160 65v-396q-33-14-68.5-21.5T260-720q-36 0-71.5 7T120-692v397q34-13 69-19t71-6q36 0 71 6t69 19Zm0 0v-396 396Z" />
  </svg>
)

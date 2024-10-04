import React from 'react'
import { IconProps } from './types'

const IconApparelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-522-75 41L46-689l264-151h90v40q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-40h90l264 151-118 206-76-38v401H240v-402Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" />
  </svg>
)

export { IconApparelSharp as default }

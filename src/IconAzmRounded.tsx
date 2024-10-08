import React from 'react'
import { IconProps } from './types'

const IconAzmRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M468-108q-19 19-43.5 8.5T400-137v-263H137q-27 0-37.5-24.5T108-468l309-309q11-11 25.5-17t30.5-6h247q33 0 56.5 23.5T800-720v247q0 16-6 30.5T777-417L468-108Zm172-492v207l80-80v-247H473l-80 80h207q17 0 28.5 11.5T640-600ZM480-440v207l80-80v-247H313l-80 80h207q17 0 28.5 11.5T480-440Z" />
  </svg>
)

export { IconAzmRounded as default }

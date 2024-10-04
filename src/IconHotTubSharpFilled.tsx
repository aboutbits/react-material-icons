import React from 'react'
import { IconProps } from './types.js'

export const IconHotTubSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-640q-33 0-56.5-23.5T200-720q0-33 23.5-56.5T280-800q33 0 56.5 23.5T360-720q0 33-23.5 56.5T280-640ZM80-80v-400h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q7 8 15 15t17 13h434v400H80Zm640-480 4-24q5-25-3.5-48.5T694-674q-29-29-43-67.5t-9-80.5l2-18h76l-4 24q-4 24 3.5 47.5T744-728q30 30 44.5 69t9.5 81l-2 18h-76Zm-160 0 4-24q5-25-3.5-48.5T534-674q-29-29-43-67.5t-9-80.5l2-18h76l-4 24q-5 24 3 47.5t25 40.5q30 30 44.5 69t9.5 81l-2 18h-76Zm120 400h80v-240h-80v240Zm-160 0h80v-240h-80v240Zm-160 0h80v-240h-80v240Zm-160 0h80v-240h-80v240Z" />
  </svg>
)
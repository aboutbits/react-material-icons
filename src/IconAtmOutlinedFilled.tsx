import React from 'react'
import { IconProps } from './types.js'

export const IconAtmOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M415-360v-180h-90v-60h240v60h-90v180h-60Zm-335 0v-200q0-17 11.5-28.5T120-600h120q17 0 28.5 11.5T280-560v200h-60v-60h-80v60H80Zm60-120h80v-60h-80v60Zm480 120v-200q0-17 11.5-28.5T660-600h180q17 0 28.5 11.5T880-560v200h-60v-180h-40v140h-60v-140h-40v180h-60Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types.js'

export const Icon20mpOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-500h180v-60H320v-40h80q17 0 28.5-11.5T440-640v-60q0-17-11.5-28.5T400-740H260v60h120v40h-80q-17 0-28.5 11.5T260-600v100Zm300 0h100q17 0 28.5-11.5T700-540v-160q0-17-11.5-28.5T660-740H560q-17 0-28.5 11.5T520-700v160q0 17 11.5 28.5T560-500Zm20-60v-120h60v120h-60ZM240-220h60v-180h40v120h60v-120h40v180h60v-200q0-17-11.5-28.5T460-460H280q-17 0-28.5 11.5T240-420v200Zm300 0h60v-60h80q17 0 28.5-11.5T720-320v-100q0-17-11.5-28.5T680-460H540v240Zm60-120v-60h60v60h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)
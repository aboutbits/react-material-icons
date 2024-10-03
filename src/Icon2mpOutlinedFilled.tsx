import React from 'react'
import { IconProps } from './types.js'

export const Icon2mpOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-220h60v-180h40v120h60v-120h40v180h60v-200q0-17-11.5-28.5T460-460H280q-17 0-28.5 11.5T240-420v200Zm150-280h180v-60H450v-40h80q17 0 28.5-11.5T570-640v-60q0-17-11.5-28.5T530-740H390v60h120v40h-80q-17 0-28.5 11.5T390-600v100Zm150 280h60v-60h80q17 0 28.5-11.5T720-320v-100q0-17-11.5-28.5T680-460H540v240Zm60-120v-60h60v60h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

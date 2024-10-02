import React from 'react'
import { IconProps } from './types'

export const Icon24mpRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-560v-40h80q17 0 28.5-11.5T440-640v-60q0-17-11.5-28.5T400-740H290q-13 0-21.5 8.5T260-710q0 13 8.5 21.5T290-680h90v40h-80q-17 0-28.5 11.5T260-600v70q0 13 8.5 21.5T290-500h120q13 0 21.5-8.5T440-530q0-13-8.5-21.5T410-560h-90Zm320 0v30q0 13 8.5 21.5T670-500q13 0 21.5-8.5T700-530v-30h10q13 0 21.5-8.5T740-590q0-13-8.5-21.5T710-620h-10v-90q0-13-8.5-21.5T670-740q-13 0-21.5 8.5T640-710v90h-60v-90q0-13-8.5-21.5T550-740q-13 0-21.5 8.5T520-710v120q0 13 8.5 21.5T550-560h90ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm100 360h40v90q0 13 8.5 21.5T370-280q13 0 21.5-8.5T400-310v-90h40v150q0 13 8.5 21.5T470-220q13 0 21.5-8.5T500-250v-170q0-17-11.5-28.5T460-460H280q-17 0-28.5 11.5T240-420v170q0 13 8.5 21.5T270-220q13 0 21.5-8.5T300-250v-150Zm300 120h80q17 0 28.5-11.5T720-320v-100q0-17-11.5-28.5T680-460H570q-13 0-21.5 8.5T540-430v180q0 13 8.5 21.5T570-220q13 0 21.5-8.5T600-250v-30Zm0-60v-60h60v60h-60Z" />
  </svg>
)

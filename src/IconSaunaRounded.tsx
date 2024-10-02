import React from 'react'
import { IconProps } from './types'

export const IconSaunaRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-240v160h80v-80h-20q-8 0-14-6t-6-14v-60h-40Zm0-80h40q0-17 11.5-28.5T240-440v-100q0-25 17.5-42.5T300-600h80q25 0 42.5 17.5T440-540v100q17 0 28.5 11.5T480-400h320v-400H160v400Zm100 100h160v-80H260v80Zm80-340q-25 0-42.5-17.5T280-700q0-25 17.5-42.5T340-760q25 0 42.5 17.5T400-700q0 25-17.5 42.5T340-640Zm-20 480h40v-80h-40v80Zm120 0h360v-160H480v60q0 8-6 14t-14 6h-20v80Zm30-481q-15-19-22.5-38t-7.5-39v-12q1-12 9.5-21t20.5-9q13 0 22 8.5t8 21.5v12q0 11 4.5 21.5T520-674q18 22 26 41.5t8 40.5q0 13-9 22.5t-22 9.5q-13 0-21.5-9.5T493-592q0-12-4.5-22T470-641Zm100 0q-15-19-22.5-38t-7.5-39v-12q1-12 9.5-21t20.5-9q13 0 22 8.5t8 21.5v12q0 11 4.5 21.5T620-674q18 22 26 41.5t8 40.5q0 13-9 22.5t-22 9.5q-13 0-21.5-9.5T593-592q0-12-4.5-22T570-641Zm102 0q-15-19-22.5-38t-7.5-39v-12q1-12 9.5-21t20.5-9q13 0 22 8.5t8 21.5v12q0 11 4.5 21.5T722-674q18 22 26 41.5t8 40.5q0 13-9 22.5t-22 9.5q-13 0-21.5-9.5T695-592q0-12-4.5-22T672-641ZM260-300v-80 80Z" />
  </svg>
)

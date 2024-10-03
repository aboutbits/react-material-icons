import React from 'react'
import { IconProps } from './types.js'

export const IconTextToSpeechRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h240q17 0 28.5 11.5T440-840q0 17-11.5 28.5T400-800H160v640h440v-40q0-17 11.5-28.5T640-240q17 0 28.5 11.5T680-200v40q0 33-23.5 56.5T600-80H160Zm120-160q-17 0-28.5-11.5T240-280q0-17 11.5-28.5T280-320h200q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240H280Zm0-120q-17 0-28.5-11.5T240-400q0-17 11.5-28.5T280-440h120q17 0 28.5 11.5T440-400q0 17-11.5 28.5T400-360H280Zm100-160q-25 0-42.5-17.5T320-580v-80q0-25 17.5-42.5T380-720h60l92-92q5-5 12.5-8.5T560-824q17 0 28.5 12t11.5 29v326q0 17-11.5 29T560-416q-8 0-15.5-3.5T532-428l-92-92h-60Zm380-100q0 33-13 63t-37 53q-8 8-19 3t-11-18v-202q0-12 11-17.5t19 2.5q24 23 37 53t13 63Zm80 0q0-66-33.5-122T715-830q-15-8-21-23.5t0-30.5q6-16 21.5-22.5T745-905q81 42 128 118t47 167q0 91-47 167T745-335q-14 8-29.5 1.5T694-356q-6-15 0-30.5t21-23.5q58-32 91.5-88T840-620Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

const IconPlayLessonOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-800v280l100-60 100 60v-280H280ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-50-100 160-100-160-100v200ZM440-240.27q0 43.27 13.5 83.77Q467-116 490-80H200q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h480q33 0 56.5 23.5T760-800v282q-10.06-1-20.13-1.5-10.06-.5-20.13-.5Q603-520 521.5-438.5 440-356.99 440-240.27Z" />
  </svg>
)

export { IconPlayLessonOutlinedFilled as default }

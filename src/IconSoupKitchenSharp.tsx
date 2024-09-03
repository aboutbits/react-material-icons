import React from 'react'
import { IconProps } from './types'

const IconSoupKitchenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M204-420q8-10 12-24.5t4-35.5q0-30-20-76t-20-69q0-12 2.5-25t13.5-30h60q-11 17-13.5 30t-2.5 25q0 23 20 69t20 76q0 21-4 34.5T264-420h-60Zm260 0q8-10 12-24.5t4-35.5q0-30-20-76t-20-69q0-12 2.5-25t13.5-30h60q-11 17-13.5 30t-2.5 25q0 23 20 69t20 76q0 21-4 34.5T524-420h-60Zm-130 0q8-10 12-24.5t4-35.5q0-30-20-76t-20-69q0-12 2.5-25t13.5-30h60q-11 17-13.5 30t-2.5 25q0 23 20 69t20 76q0 21-4 34.5T394-420h-60Zm56 340q-101 0-178-67.5T120-315q-3-18 9.5-31.5T160-360h421l44-414q5-45 38.5-75.5T744-880q50 0 85 35t35 85q0 14-2.5 37l-2.5 23-79-10 2-20.5q2-20.5 2-29.5 0-17-11.5-28.5T744-800q-16 0-27 10.5T704-764l-46 435q-11 106-87 177.5T390-80Zm0-80q59 0 106-33t68-87H213q23 54 70.5 87T390-160Zm0-120Z" />
  </svg>
)

export { IconSoupKitchenSharp as default }

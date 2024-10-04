import React from 'react'
import { IconProps } from './types'

const IconCleanHandsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m560-60-280-78v58H40v-440h318l322 120v80h200v160L560-60ZM120-160h80v-280h-80v280Zm438 16 238-74v-22H513l-125-42 24-76 117 38h71v-26l-256-94h-64v220l278 76Zm42-350-80-30q-2-48-36.5-82T400-640q-33 0-60.5 16.5T296-580h-86q17-51 56.5-88t93.5-48v-84h-60v-80h220q34 0 64 11t55 30l-57 57q-14-8-29.5-13t-32.5-5h-80v84q69 14 114.5 68.5T600-520v26Zm-200-86Zm360 20q-33 0-56.5-23.5T680-640q0-23 17-57t63-103q46 69 63 103t17 57q0 33-23.5 56.5T760-560Z" />
  </svg>
)

export { IconCleanHandsSharp as default }

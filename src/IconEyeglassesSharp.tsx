import React from 'react'
import { IconProps } from './types'

const IconEyeglassesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M274-360q31 0 55.5-18t34.5-47l15-46q16-48-8-88.5T302-600H161l19 157q5 35 31.5 59t62.5 24Zm412 0q36 0 62.5-24t31.5-59l19-157H659q-45 0-69 41t-8 89l14 45q10 29 34.5 47t55.5 18Zm-412 80q-66 0-115.5-43.5T101-433L80-600H40v-80h262q44 0 80.5 21.5T440-600h81q21-37 57.5-58.5T659-680h261v80h-40l-21 167q-8 66-57.5 109.5T686-280q-57 0-102.5-32.5T520-399l-15-45q-2-7-4-14.5t-4-21.5h-34q-2 12-4 19.5t-4 14.5l-15 46q-18 54-63.5 87T274-280Z" />
  </svg>
)

export { IconEyeglassesSharp as default }

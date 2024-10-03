import React from 'react'
import { IconProps } from './types.js'

export const IconEndocrinologyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m92-122-25-76q42-14 67.5-49t25.5-79v-418q-24-26-43.5-56T83-864l74-32q42 98 129.5 157T480-680q106 0 193.5-59T803-896l74 32q-14 34-34 64t-43 56v418q0 44 25 79t67 49l-25 76q-66-22-106.5-78T720-326v-348q-53 35-113.5 54.5T480-600q-66 0-127-19.5T240-674v348q0 70-41 126T92-122Zm308-78q-50 0-85-35t-35-85v-251l54 13q46 11 83.5 38.5T480-454q25-38 62.5-65.5T626-558l54-13v251q0 50-35 85t-85 35q-23 0-43.5-8.5T480-231q-16 14-36.5 22.5T400-200Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconHdrOffSelectRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-160h-50q-13 0-21.5-8.5T740-190q0-13 8.5-21.5T770-220h50v-50q0-13 8.5-21.5T850-300q13 0 21.5 8.5T880-270v50h50q13 0 21.5 8.5T960-190q0 13-8.5 21.5T930-160h-50v50q0 13-8.5 21.5T850-80q-13 0-21.5-8.5T820-110v-50Zm-300 50v-180q0-13 8.5-21.5T550-320h110q24 0 42 18t18 42v40q0 23-10.5 35.5T684-164l20 46q6 14-2 26t-24 12q-8 0-15-4t-10-12l-29-64h-44v50q0 13-8.5 21.5T550-80q-13 0-21.5-8.5T520-110Zm60-110h80v-40h-80v40ZM60-180v70q0 13-8.5 21.5T30-80q-13 0-21.5-8.5T0-110v-180q0-13 8.5-21.5T30-320q13 0 21.5 8.5T60-290v50h80v-50q0-13 8.5-21.5T170-320q13 0 21.5 8.5T200-290v180q0 13-8.5 21.5T170-80q-13 0-21.5-8.5T140-110v-70H60Zm200 70v-180q0-13 8.5-21.5T290-320h110q24 0 42 18t18 42v120q0 24-18 42t-42 18H290q-13 0-21.5-8.5T260-110Zm60-30h80v-120h-80v120Zm376-396-62-62q2-11 4-21t2-21q0-66-47-113t-113-47q-11 0-21 1.5t-19 4.5l-64-64q26-12 52-17t52-5q100 0 170 70t70 170q0 26-6 52t-18 52ZM480-400q-100 0-170-70t-70-170q0-29 6-55t18-49l-38-38q-11-11-11-28t11-28q11-11 28-11t28 11l396 396q11 11 11 28t-11 28q-11 11-28 11t-28-11l-38-38q-23 12-50.5 18t-53.5 6Zm42-86L326-682q-3 8-4.5 19.5T320-640q0 66 47 113t113 47q11 0 22.5-1.5T522-486Zm15-210ZM424-584Z" />
  </svg>
)

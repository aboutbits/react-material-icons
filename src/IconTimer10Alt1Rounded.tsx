import React from 'react'
import { IconProps } from './types'

export const IconTimer10Alt1Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M370-270q17 0 28.5-11.5T410-310v-260q0-17-11.5-28.5T370-610h-50q-17 0-28.5 11.5T280-570q0 17 11.5 28.5T320-530h10v220q0 17 11.5 28.5T370-270Zm160 0h60q33 0 56.5-23.5T670-350v-180q0-33-23.5-56.5T590-610h-60q-33 0-56.5 23.5T450-530v180q0 33 23.5 56.5T530-270Zm0-80v-180h60v180h-60Zm-50 190q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Zm-80-400q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 760q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z" />
  </svg>
)

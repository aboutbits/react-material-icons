import React from 'react'
import { IconProps } from './types'

const IconLanguageKoreanLatinRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M216-457q26 0 44.5-11.5T279-503q0-23-18.5-35T216-550q-26 0-44.5 12T153-503q0 23 18.5 34.5T216-457ZM97-608q-9 0-15.5-6.5T75-630q0-9 6.5-15.5T97-652h92v-30q0-11 7.5-18.5T215-708q11 0 18.5 7.5T241-682v30h93q9 0 15.5 6.5T356-630q0 9-6.5 15.5T334-608H97Zm119 195q-47 0-80.5-23.5T102-503q0-44 33.5-67t80.5-23q48 0 81.5 23t33.5 67q0 44-33.5 67T216-413Zm-33 161q-17 0-28.5-11.5T143-292v-74q0-11 8-18.5t19-7.5q11 0 18.5 7.5T196-366v70h242q9 0 15.5 6.5T460-274q0 9-6.5 15.5T438-252H183Zm231-105q-11 0-18.5-7.5T388-383v-300q0-11 7.5-18t18.5-7q11 0 18 7t7 18v125h47q9 0 15.5 6.5T508-536q0 9-6.5 15.5T486-514h-46v131q0 11-7.5 18.5T414-357Zm288 23q28 0 54.5-13t48.5-37v-106q-23 3-42.5 7t-36.5 9q-45 14-67.5 35T636-390q0 26 18 41t48 15Zm-23 68q-57 0-90-32.5T556-387q0-52 33-85t106-53q23-6 50.5-11t59.5-9q-2-47-22-68.5T721-635q-21 0-41 6t-47 20q-12 7-25 4t-20-15q-7-12-3-25.5t16-20.5q31-17 66.5-27.5T740-704q71 0 108 44t37 128v224q0 14-9.5 23.5T852-275h-5q-13 0-22-8.5T814-304l-2-16q-28 25-61.5 39.5T679-266Z" />
  </svg>
)

export { IconLanguageKoreanLatinRounded as default }
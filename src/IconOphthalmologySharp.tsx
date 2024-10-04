import React from 'react'
import { IconProps } from './types'

const IconOphthalmologySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-520v-80h63q29-69 84.5-118.5T395-788l-23-24 56-56 50 49q12 12 15.5 28.5T492-758q-5 17-18 28t-30 13q-69 11-121.5 56.5T250-548l-8 28H120Zm480 40q0-44 16.5-84t53.5-62q-23-30-53.5-51.5T549-710l23-77q62 18 110 59t78 98q42 20 61 61.5t19 88.5q0 47-19 89t-61 61q-30 57-79 98t-110 59l-23-77q36-11 67.5-32.5T670-334q-37-22-53.5-62T600-480Zm120 80q15 0 27.5-24.5T760-480q0-31-12.5-55.5T720-560q-15 0-27.5 24.5T680-480q0 31 12.5 55.5T720-400ZM423-87l-56-57 28-28q-72-20-128-69.5T183-360h-63v-80h122l8 28q20 67 72.5 112.5T444-243q17 2 30 13.5t18 27.5q5 16 1.5 32T478-142l-55 55Zm297-393Z" />
  </svg>
)

export { IconOphthalmologySharp as default }

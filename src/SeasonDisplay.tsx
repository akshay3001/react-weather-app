import './SeasonDisplay.css'
import { getSeason, type Season } from './season.ts'

const seasonConfig = {
  summer: { text: "let's hit beach", iconName: 'sun' },
  winter: { text: 'Its chilly here', iconName: 'snowflake' },
} satisfies Record<Season, { text: string; iconName: string }>

// Shows a message and Semantic UI icons for the season at a latitude and 0-based month.
export default function SeasonDisplay({ lat, month }: { lat: number; month: number }) {
  const season = getSeason(lat, month)
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`}></i>
    </div>
  )
}

import { useEffect, useState } from 'react'
import Loader from './Loader.tsx'
import SeasonDisplay from './SeasonDisplay.tsx'

type GeoState =
  | { status: 'loading' }
  | { status: 'ready'; lat: number; month: number }
  | { status: 'error'; message: string }

// Asks the browser for the user's location, then shows the season for it.
export default function App() {
  const [geo, setGeo] = useState<GeoState>({ status: 'loading' })

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        setGeo({ status: 'ready', lat: position.coords.latitude, month: new Date().getMonth() }),
      (err) => setGeo({ status: 'error', message: err.message }),
    )
  }, [])

  if (geo.status === 'error') {
    return (
      <div>
        <h2>Error: {geo.message}</h2>
      </div>
    )
  }

  if (geo.status === 'ready') {
    return (
      <div>
        <section style={{ minHeight: '100vh', margin: '0 auto -60px' }}>
          <SeasonDisplay lat={geo.lat} month={geo.month} />
        </section>
      </div>
    )
  }

  return <Loader />
}

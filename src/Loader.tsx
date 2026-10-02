import './Loader.css'

// Full-page Semantic UI dimmer with a text label.
export default function Loader({ loadingText = 'Please Accept location request' }) {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{loadingText}</div>
    </div>
  )
}

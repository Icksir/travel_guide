import pin from "./assets/location-dot.svg"

export default function Card(props){
    const {location} = props

    console.log(location)

    return(
        <div className="card">
            <img src={location.imageUrl} className="card-pic"></img>
            <div className="card-info">
                <span className="card-loc">
                    <img src={pin} className="card-loc-icon"></img>
                    <p className="card-country">{location.location}</p>
                    <a href={location.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h1 className="card-title">{location.title}</h1>
                <p className="card-date">{location.startDate} {location.endDate}</p>
                <p className="card-desc">{location.description}</p>
                
            </div>
        </div>
    )
}
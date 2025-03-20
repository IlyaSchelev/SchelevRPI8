import { JSX } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { OffersList } from "../../types/offer";

type MapProps = {
  offersList: OffersList[];
};

function Map({ offersList }: MapProps): JSX.Element {
  // Центр карты - координаты Амстердама из city.location
  const center: [number, number] = [
    offersList[0]?.city.location.latitude || 52.3676,
    offersList[0]?.city.location.longitude || 4.9041,
  ];

  return (
    <MapContainer
      center={center}
      zoom={13}
      className="cities__map"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {offersList.map((offer) => (
        <Marker
          key={offer.id}
          position={[offer.location.latitude, offer.location.longitude]}
        >
          <Popup>
            <b>{offer.title}</b>
            <br />
            Price: €{offer.price}
            <br />
            Type: {offer.type}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export { Map };
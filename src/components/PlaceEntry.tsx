import "./PlaceEntry.css";
import {PlaceViewProps} from "./MainContent"
/*
interface PlaceEntryProps {
  imageURL: string;
  imageAlt: string;
  placeName: string;
  countryName: string;
  mapURL: string;
  text: string;
} */
function PlaceEntry(props: PlaceViewProps): JSX.Element {
  return (
    <section className="flex-card">
      <img src={props.place.imageURL} alt={props.place.imageAlt} className="card-image" />
      <h2>{props.place.placeName}</h2>
      <h3>{props.place.countryName}</h3>
      <p>{props.place.text}</p>
      <a href={props.place.mapURL}>Click</a>
    </section>
  );
}

export default PlaceEntry;

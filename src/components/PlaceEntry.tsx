interface PlaceEntryProps {
  imageURL: string;
  imageAlt: string;
  placeName: string;
  countryName: string;
  mapURL: string;
  text: string;
}
function PlaceEntry(props: PlaceEntryProps): JSX.Element {
  return (
    <section>
      <img src={props.imageURL} alt={props.imageAlt}></img>
      <h2>{props.placeName}</h2>
      <h3>{props.countryName}</h3>
      <p>{props.text}</p>
      <a href={props.mapURL}>Click</a>
    </section>
  );
}

export default PlaceEntry;

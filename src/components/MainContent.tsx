import PlaceEntry from "./PlaceEntry";
import povegliaImage from "./poveglia.jpg";
import "./Main.css";
import {placeArray} from "../placeArray";
import {Place} from "../placeArray";

function MainContent(): JSX.Element {
  return (
    <main className="flex-container">
        <PlaceEntry place = {placeArray[0]} />
        <PlaceEntry place = {placeArray[1]} />
        <PlaceEntry place = {placeArray[2]} />
        <PlaceEntry place = {placeArray[3]} />
        <PlaceEntry place = {placeArray[4]} />
     
    </main>
  );
}
export default MainContent;

export interface PlaceViewProps {
    place: Place;
}

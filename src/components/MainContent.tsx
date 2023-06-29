import PlaceEntry from "./PlaceEntry";

function MainContent(): JSX.Element {
    return (
        <main>
            <PlaceEntry
            imageURL={"./image/poveglia.jpg"}
            imageAlt={"poveglia"}
            placeName={"Poveglia Island"}
            countryName={"Italy"}
            mapURL={"https://www.google.com/maps/place/Poveglia/@45.3819737,12.328871,17z/data=!3m1!4b1!4m6!3m5!1s0x477ea550964f6259:0x6186e01392eeb1e8!8m2!3d45.3818788!4d12.331196!16zL20vMDV0bDc1?hl=en-GB&entry=ttu"}
            text={"Poveglia Island is an abandoned island located in the Venetian Lagoon in Italy. It has a haunting history and is known as one of the most haunted places in the world."}
            />
        </main>
    )
}
export default MainContent;

function AboutMe() {
    const city = "Wallingford"
    const state= "Vermont"
    return (
        <article style={{textAlign:"left", color:"purple"}}>
            <p>I grew up in {city}, {state}</p>
            <ul>The Last Three Places I Visited:
            <li>Bedminster, New Jersey</li>
            <li>Belgrade, Serbia</li>
                <li>Paris, France</li>
                </ul>
        </article>
    )
}
    export default AboutMe;
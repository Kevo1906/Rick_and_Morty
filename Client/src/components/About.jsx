import about_image from "../img/photo1675370435.jpg"

function About(props){
    return(
        <div>
            <h1>About the developer:</h1>
            <img className="about-image" src={about_image} alt="Me"></img>
        </div>
    )
}

export default About
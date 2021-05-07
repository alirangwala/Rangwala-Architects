import Title from "../Components/Title";
import about from "../images/salim.png";

function About() {
  return (
    <div className="About">
      <Title title={"About"} span={"About"} />
      <div className="about-details">
        <div className="details">
          <img src={about} alt="" />
          <p>
            The firm was founded by Salim Rangwala 16 years ago. Prior to that
            he was the chief designer for a major St. Louis firm for 11 years.
            He holds a Master of Architecture and Urban Design degree from
            Washington University.
          </p>
        </div>

        <h4>
          Your space, your vision, within your budget for your project This best
          describes us…….
        </h4>
        <p>
          Rangwala Architects offers comprehensive Architectural services from
          programming, planning ,design to construction administration. We have
          been involved with a wide variety of projects over the last 16 years.
          Our projects range in type from Movie theatres, Hotels, Retail
          Centers, Medical Buildings to historic renovations, Restaurants and
          Homes.
        </p>
      </div>
    </div>
  );
}

export default About;

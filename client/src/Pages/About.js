import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";

function About() {
  return (
    <div className="About">
      <Title></Title>
      <ImageSection />
      <div className="about-details">
        <div className="details">
          <p>Full Name</p>
        </div>
      </div>
    </div>
  );
}

export default About;

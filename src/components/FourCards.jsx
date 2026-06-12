import "./fourcards.css"
import Card from "./Cards"
import bg1 from "../assets/honeymoon.jpg"
import bg2 from "../assets/families.jpg"
import bg3 from "../assets/couples.jpg"

const FourCards = () => {
    return (
      <section className="experiences" >
        <div className='experience'>
        <h2>Well-known experiences</h2>
      <p>Passtimes for leisure and enjoyment.</p>
        </div>
      
      <div className="card-container">
        <Card className="card" imageUrl={bg1} heading="Honeymoon" paragraph="" />
        <Card className="card" imageUrl={bg2} heading="Families" paragraph=""  />
        <Card className="card" imageUrl={bg3} heading="Couples" paragraph=""  />
      </div>
      </section>
    );
  }

export default FourCards
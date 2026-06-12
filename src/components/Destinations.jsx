import React from 'react'

import bg from "../assets/flamingo.jpg"
import bg2 from "../assets/nyara.jpg"
import bg3 from "../assets/serengeti1.jpg"
import bg4 from "../assets/serengeti2.jpg"
import bg5 from "../assets/zanzibar1.jpg"
import bg6 from "../assets/zanzibar2.jpg"
import bg7 from "../assets/kilimanjaroclimb.jpg"
import bg8 from "../assets/kilimanjaroclimber.jpg"
import DestinationData from './DestinationData'


const Destinations = () => {
  return (
    <section className='Destinations'>
        <h1>Popular Destinations</h1>
        <p>Our selection of popular destinations promises unforgettable adventures and experiences.</p>

        <DestinationData 
        cname="destination"
        title="Lake Manyara National Park" 
        text="Lake Manyara National Park well known for the tree climbing lions, the soda ash lake that attracts thousands and pink flamingos, one of Tanzania’s biggest elephant population and breathtaking scenery."
        bg={bg}
        bg2={bg2}
        />
        <DestinationData 
        cname="destination-reverse"
        title="Serengeti National Park" 
        text="Tanzania’s oldest and most popular national park, also a world heritage site and recently proclaimed a 7th world wide wonder, the Serengeti is famed for its annual migration, when some six million hooves pound the open plains, as more than 200,000 zebra and 300,000 Thomson’s gazelle join the wildebeest’s trek for fresh grazing. Yet even when the migration is quiet, the Serengeti offers arguably the most scintillating game-viewing in Africa: great herds of buffalo, smaller groups of elephant and giraffe, and thousands upon thousands of eland, topi, kongoni, impala and Grant’s gazelle."
        bg={bg3}
        bg2={bg4}/>
        <DestinationData 
        cname="destination"
        title="Beach Holiday at Zanzibar" 
        text="Zanzibar is a Tanzanian archipelago off the coast of East Africa. On its main island, Unguja, familiarly called Zanzibar, is Stone Town, a historic trade center with Swahili and Islamic influences. Its winding lanes present minarets, carved doorways and 19th-century landmarks such as the House of Wonders, a former sultan’s palace. The northern villages Nungwi and Kendwa have wide beaches lined with hotels."
        bg={bg5}
        bg2={bg6}/>
      <DestinationData 
        cname="destination-reverse"
        title="Kilimanjaro Climbing" 
        text="Mount Kilimanjaro, Africa's tallest peak, is an awe-inspiring destination for adventurers seeking the ultimate trekking experience. With its snow-capped summit, diverse ecosystems, and breathtaking views, Kilimanjaro offers a unique and unforgettable journey. Explore this iconic mountain and embark on a once-in-a-lifetime adventure to reach the 'Roof of Africa."
        bg={bg7}
        bg2={bg8}/>


    </section>
  )
}

export default Destinations

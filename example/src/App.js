// test-app/src/App.js
import React from 'react';
import Table, { name, creator, List, Bus, Accordian } from 'clearlabcomponent';
{
  /* The following line can be included in your src/index.js or App.js file */
}

const data = [
    {
      title: 'About Steve Jobs',
      body: "Steve Jobs (February 24, 1955 – October 5, 2011) was an American entrepreneur, inventor, and industrial designer who co-founded Apple Inc. He played a key role in the development of revolutionary products such as the iPhone, iPad, and MacBook. Jobs was known for his visionary approach to technology and design, which helped transform multiple industries including personal computing, animated movies, music, and mobile phones. His impact on technology and innovation remains profound and influential."
    },
  {
      title: 'About Elon Musk',
      body: "Elon Musk (born June 28, 1971) is an entrepreneur and business magnate known for founding and leading several high-profile technology companies. He is the CEO and lead product architect of Tesla, Inc., and the founder, CEO, and chief engineer of SpaceX. Musk is also involved in ventures such as Neuralink and The Boring Company. Known for his ambitious vision to revolutionize space travel, electric vehicles, and sustainable energy, Musk has become one of the most influential figures in modern technology and innovation."
  },
  {
      title: 'About Andrew Tate',
      body: "Andrew Tate (born December 1, 1967) is a British-American entrepreneur, social media personality, and former professional kickboxer. Known for his outspoken and controversial views, Tate has gained significant attention on social media platforms for his opinions on wealth, success, and masculinity. He is the founder of several businesses and has been a vocal advocate for personal empowerment and self-improvement. His online presence and public persona have sparked both admiration and criticism."
  }
];

const App = () => (
   <div>


      <h4>{name}, {creator}</h4>

      <p> new Buss Class Value :  {new Bus().getColor()} </p>
      <List data={["Max", "Musterman"]} />
      <Table 
        theaders={["Name", "Location"]}
        data={[{name: "MIT Student", location:"Germany"},
          {name: "Borz", location: "Afghanistan"}

        ]}
        columns={["name", "location"]}
      />
      <Accordian data={data} />
  </div>
);

export default App;

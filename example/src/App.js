// test-app/src/App.js
import React from 'react';
import Table,{ name, creator, List, Bus } from 'clearlabcomponent';

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
  </div>
);

export default App;

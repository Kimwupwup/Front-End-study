import React from "react";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg"
    },
    {
        id: 2,
        name: "Ramen",
        image: "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg"
    },
    {
        id: 3,
        name: "Katsdong",
        image: "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg"
    },
    {
        id: 4,
        name: "Kimbab",
        image: "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg"
    }
];

function Food({ name, picture }) {
  return (
      <div>
          <h1>I like Food {name}</h1>
          <img src={picture} alt={name} />
      </div>
  );
}

function App() {
    return (
        <div>
            <h1>Hello</h1>
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image} />
            ))}
        </div>
    );
}

export default App;

import React from 'react'

export default function PokemonCard(
  {
    id,
    name,
    image,
    types,
    stats,
    onAddToFavorites,
  }
) {
  return (
    <div className="bg-black rounded shadow p-4 flex flex-col items-center">
      {/* Name */}
      <h2 className="capitalize font-bold text-lg mb-2">{name}</h2>
    </div>
  );
}

// Example function mapping type -> color. Add your own logic for more types
function getTypeColor(type) {
  switch (type.toLowerCase()) {
    case "normal":
      return "bg-type-normal text-white";
    case "fire":
      return "bg-type-fire text-white";
    case "water":
      return "bg-type-water text-white";
    case "electric":
      return "bg-type-electric text-white";
    case "grass":
      return "bg-type-grass text-white";
    case "ice":
      return "bg-type-ice text-white";
    case "fighting":
      return "bg-type-fighting text-white";
    case "poison":
      return "bg-type-poison text-white";
    case "ground":
      return "bg-type-ground text-white";
    case "flying":
      return "bg-type-flying text-white";
    case "psychic":
      return "bg-type-psychic text-white";
    case "bug":
      return "bg-type-bug text-white";
    case "rock":
      return "bg-type-rock text-white";
    case "ghost":
      return "bg-type-ghost text-white";
    case "dark":
      return "bg-type-dark text-white";
    case "dragon":
      return "bg-type-dragon text-white";
    case "steel":
      return "bg-type-steel text-white";
    case "fairy":
      return "bg-type-fairy text-white";
    default:
      // Fallback if the type doesn't match any known type
      return "bg-gray-300 text-black";
  }
}


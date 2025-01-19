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
    <div className="bg-black rounded-3xl shadow p-6 m-4 flex flex-col items-center">
      {/* Name */}
      <h2 className="capitalize font-bold text-lg mb-1">{id}. {name}</h2>

      {/* Image */}
      <img
        src={image}
        alt={name}
        className=" h-28 w-auto object-contain mb-1"
      />

      {/* Types */}
      <div className="flex space-x-2 mb-2">
        {types.map((type) => (
          <span
            key={type}
            className={`text-xs text-white font-semibold px-2 py-1 rounded capitalize ${getTypeColor(type)}`}
          >
            {type}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="text-sm w-full">
        {stats.map((stat) => (
          <div key={stat.name} className="flex justify-between my-1">
            <span className="capitalize">{stat.name}:</span>
            <span>{stat.base}</span>
          </div>
        ))}
      </div>
    </div>



  );
}

function getTypeColor(type) {
  switch (type.toLowerCase()) {
    case "normal":
      return "bg-type-normal/90";
    case "fire":
      return "bg-type-fire/90";
    case "water":
      return "bg-type-water/90";
    case "electric":
      return "bg-type-electric/90";
    case "grass":
      return "bg-type-grass/90";
    case "ice":
      return "bg-type-ice/90";
    case "fighting":
      return "bg-type-fighting/90";
    case "poison":
      return "bg-type-poison/90";
    case "ground":
      return "bg-type-ground/90";
    case "flying":
      return "bg-type-flying/90";
    case "psychic":
      return "bg-type-psychic/90";
    case "bug":
      return "bg-type-bug/90";
    case "rock":
      return "bg-type-rock/90";
    case "ghost":
      return "bg-type-ghost/90";
    case "dark":
      return "bg-type-dark/90";
    case "dragon":
      return "bg-type-dragon/90";
    case "steel":
      return "bg-type-steel/90";
    case "fairy":
      return "bg-type-fairy/90";
    default:
      return "bg-gray-300";
  }
}
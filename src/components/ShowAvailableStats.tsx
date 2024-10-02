export const ShowAvailableStats = ({ data }) => {
  const stats = [
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender",
    "homeworld",
    "title",
    "episode_id",
    "opening_crawl",
    "director",
    "producer",
    "release_date",
    "classification",
    "designation",
    "average_height",
    "skin_colors",
    "hair_colors",
    "eye_colors",
    "average_lifespan",
    "homeworld",
    "language",
    "model",
    "manufacturer",
    "cost_in_credits",
    "length",
    "max_atmosphering_speed",
    "passengers",
    "cargo_capacity",
    "consumables",
    "hyperdrive_rating",
    "MGLT",
    "starship_class",
    "crew",
    "cargo_capacity",
    "consumables",
    "vehicle_class",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population",
  ];

  return (
    <ul>
      {stats
        .filter((stat) => !!data[stat])
        .map((stat, index) => (
          <li key={index}>
            {stat}: {data[stat]}
          </li>
        ))}
    </ul>
  );
};

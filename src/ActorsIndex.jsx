export function ActorsIndex(props) {
  return (
    <div id="actors-index">
      <h1>All {props.actorsProp.length} Actors</h1>
      {props.actorsProp.map((actor) => (
        <div key={actor.id} className="actors">
          <h2>
            {actor.first_name} {actor.last_name}
          </h2>
          <img src={actor.image} alt="" />
          <p>Known For: {actor.known_for}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}

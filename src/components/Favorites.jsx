import { useGlobalContext } from "../context";

const Favorites = () => {
  const {favorites, removeFromFavorites} = useGlobalContext();
  return(
    <div className="favorites-content">
      <h5>Favorites</h5>
      <div className="favorites-container">
        {favorites.map((item) => {
          const {idMeal, strMealThumb: image} = item
          return(
            <div key={idMeal} className="favorite-item">
              <img src={image} className="favorites-img img" />
              <button className="remove-btn" onClick={() => {removeFromFavorites(idMeal)}}>
                Remove
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Favorites
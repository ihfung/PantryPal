
export default function ChiefCard({chief}) {
    return (
        <div className="chief-card">
            <img src={chief.profile_pic} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.username}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipe_count}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
               
            </div>
        </div>
    )
}
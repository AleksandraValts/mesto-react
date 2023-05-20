function Card(card) {
  function handleClick() {
    card.onCardClick(card);
    console.log(card);
  }
  return (
    <div className="elements__element">
      <img className="elements__image" alt={card.name} 
           src={card.link} onClick={handleClick}/>
        <div className="elements__info">
          <h2 className="elements__name">{card.name}</h2>
          <div className="elements__like-container">
            <button type="button" className="elements__like"></button>
            <p className="elements__likes-amount">{card.likes.length}</p>
          </div>
        </div>
        <button type="button" className="elements__delete"></button>
    </div>
  );
}

export default Card;
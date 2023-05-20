import React from 'react';
import profileImage from '../images/profile_image.jpg';
import apiData from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [info, setUserInfo] = React.useState({
    name: "Дени Вильнев",
    about: "Режиссер, сценарист",
    avatar: {profileImage},
  });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    apiData
      .getUserInfo()
      .then((data) => {setUserInfo({
        name: data.name,
        about: data.about,
        avatar: data.avatar});
      })
      .catch((err) => {console.log(err)});
    })

  React.useEffect(() => {
    apiData
      .getInitialCards()
      .then((data) => {setCards(data)})
      .catch((err) => {console.log(err)});
  }, []);
  
  return (
      <main className="content">    
        <section className="profile">
          <div className="profile__container">
            <img className="profile__image" src={info.avatar} alt="Авиатор" />
            <div className="profile__button-avatar" 
            onClick={props.onEditAvatar}></div>
              <div className="profile__info">
                <div className="profile__change">
                  <h1 className="profile__title">{info.name}</h1>
                  <button type="button" className="button profile__button-edit"
                  onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__subtitle">{info.about}</p>
              </div>
            </div>
            <button type="button" className="button profile__button-add"
            onClick={props.onAddPlace}></button>
          </section>
          <section className="elements">
          {cards.map((card) => (
           // console.log(card),
            <Card key={card._id} {...card} onCardClick={props.onCardClick} />
          ))}         
          </section>
      </main>
  );
}

export default Main;
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
  //  const profilePopup = document.querySelector('.popup_type_profile');
  //  profilePopup.classList.add('popup_opened');
    setProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
  //  const placePopup = document.querySelector('.popup_type_place');
  //  placePopup.classList.add('popup_opened');
    setPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
  //  const avatarPopup = document.querySelector('.popup_type_avatar');
  //  avatarPopup.classList.add('popup_opened');
    setAvatarPopupOpen(true);
  }
  
  function closeAllPopups() {
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
        <Header />
        <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm 
            isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
            title={"Редактировать профиль"} form={"form_profile"}>
            <input
                className="popup__input popup__input_type_name" required
                type="text" name="name" id="input-name"
                minLength="2" maxLength="40" placeholder="Имя пользователя"/>
            <span className="input-name-error popup__span"></span>
            <input
                className="popup__input popup__input_type_about" required
                type="text" name="about" id="input-about"
                minLength="2" maxLength="200" placeholder="Информация о пользователе"/>
            <span className="input-about-error popup__span"></span>
        </PopupWithForm>
        <PopupWithForm 
            isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
            title={"Новое место"} buttonSave={"Создать"} form={"form_places"}>
            <input
                className="popup__input popup__input_type_place" required
                type="text" name="place" id="input-place"
                minLength="2" maxLength="30" placeholder="Название"/>
            <span className="input-place-error popup__span"></span>
            <input
                className="popup__input popup__input_type_src" required
                type="url" name="link" id="input-src"
                placeholder="Ссылка на картинку"/>
            <span className="input-src-error popup__span"></span>
        </PopupWithForm>
        <PopupWithForm 
            isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
            title={"Обновить аватар"} form={"form_avatar"} container={"avatar"}>
            <input
                className="popup__input popup__input_type_avatar" required
                type="url" name="avatar" id="input-avatar"
                placeholder="Ссылка на картинку"/>
            <span className="input-avatar-error popup__span"></span>
        </PopupWithForm>
        <ImagePopup 
            isOpen={selectedCard} card={selectedCard} 
            onClose={closeAllPopups}/>
        <PopupWithForm 
            onClose={closeAllPopups}
            title={"Вы уверены?"} buttonSave={"Да!"} container={"delete"}>
        </PopupWithForm>
    </div>
  );
}

export default App;

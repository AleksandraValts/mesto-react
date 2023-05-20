function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? `popup_opened` : ""}`}>
      <div className={`popup__container popup__container_${props.container}`}>
      <button type="button" className="popup__button-close" onClick={props.onClose}></button>
      <h2 className="popup__text">{props.title}</h2>
      <form className={`popup__form popup__${props.form}`}>{props.children}
      <button type="submit" className="popup__button">{props.buttonSave}</button>
      </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
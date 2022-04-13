function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 className="note_title">{props.title}</h1>
      <p className="note_content">{props.content}</p>
      <button className="delete_btn" onClick={handleClick}>
        DELETE
      </button>
    </div>
  );
}

export default Note;

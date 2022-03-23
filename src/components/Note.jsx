function Note(props) {
    return (
        <div className="note">
            <h1 className="note_title">
                {props.title}
            </h1>
            <p className="note_content">
                {props.content}
            </p>
        </div>
    );
}

export default Note;
import './CreateNote.css';
export default function CreateNote({handleActive}){
    return<>
        <h1 className="note-heading">Note Heading</h1>
      <button className="save-btn btn-with-text" onClick={()=>handleActive("CreateNote")}>Save</button>
      <textarea type="text" className="note-box"/>
    </>
}
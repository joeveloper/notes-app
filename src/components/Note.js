import {MdDeleteForever} from "react-icons/md"; 

const Note = ({id, text, date, handleDeleteNote}) => {          //Add title to note

    return ( 
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
            <small>{date}</small>
                <MdDeleteForever 
                className='delete-icon' 
                onClick ={ () => handleDeleteNote(id)}
                size='1.3em'/>
            </div>  
        </div>
     );
}
 
export default Note;

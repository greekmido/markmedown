import { useState } from "react";
import View from "./View";

function Editor (){
    const [editorVal,edit] = useState("this is the default vlaue of the marked down text");
    function handleEditorChange(event){
        edit(event.target.value)
    }
    return(
    <div className="col-5">
        <>
        <textarea className="form-control" onInput={handleEditorChange} defaultValue={editorVal} />
        <View toMark={editorVal} />
        </>
 </div>
    )
}


 export default Editor;
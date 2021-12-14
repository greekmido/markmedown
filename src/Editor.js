

function Editor (props){
    
    return(
    <div id='editor' className="col-6">
        <>
        <textarea className="form-control" rows='10' onInput={props.handle} defaultValue={props.workArea} />   
        </>
 </div>
    )
}


 export default Editor;
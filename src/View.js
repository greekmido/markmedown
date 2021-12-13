    import { marked } from 'marked';
    import parse from "html-react-parser";

function View (props){
    const html = marked.parse(props.toMark);
    const ready = parse(html);
    
    return(
     
            <div id='preview' className=''>
            {ready}
            </div>
    )
}


export default View
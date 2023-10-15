import React,{useState} from 'react'

export default function TextUtils(props) {
    // useState hook
    const [text,setText] = useState("Write here...");

    // event to able change
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    // function to convert upperCase
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Coverted to Uppercase','success');
    }

    // function to convert lowerCase
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Coverted to Lowercase','success');
    }
    // function to reverse
    const handlerevClick=()=>{
        let newText="";
        for(let i=text.length-1;i>=0;i--){
            newText += text[i];
        }
        
        setText(newText);
        props.showAlert('reversed','success');
    }
    // function to copy text
    const handlecopyClick=()=>{
    //   var text = document.getElementById('myBox');
    //   text.select();
    //   navigator.clipboard.writeText(text.value);
      navigator.clipboard.writeText(text);
    //   document.getSelection().removeAllRanges();
      props.showAlert('Copied','success');
    }
    // function to clear
    const handleclearClick=()=>{
        let newText="";
        
        setText(newText);
        props.showAlert('Cleared','danger');
    }
    // function to remove Extra spaces
    const handleremoveExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed Extra Spaces','danger');
    }
    return (
        <>

            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Try TextUtils- Word counter,Character counter, Remove extra spaces</h3>
                <div className="mb-3 my-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlerevClick}>Reverse</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopyClick}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleremoveExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleclearClick}>Clear</button>

            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                {/* logic to remove blank spaces */}
                <h6>No of Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</h6>
                <h6>No of Characters: {text.length}</h6>
            </div>

        </>
    )
}

import React,{useState} from 'react'

export default function Text(props) {


  
  const handleCopyClick = () => {
    // Select the text from the textarea
    const text = document.getElementById('mybox').value;
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(text);
    
    props.showalert("Text Copied to Clipboard.","success");
  };

  const extraspaces=()=>{
    const newtext=text.split(/[ ]+/);
    SetText(newtext.join(' '));
    props.showalert("Extra Space Removed","success");
  }
  const alternatecase=(sentence)=>{
    return sentence
    .split('')
    .map((char,index)=> index %2===0 ? char.toUpperCase(): char.toLowerCase())
    .join('')
    
  }
  const alternate=()=>{
    let newtext=alternatecase(text);
    SetText(newtext);
    props.showalert("Alternate Case updated","success");
  }
  const capitalizeWords = (sentence) => {
  return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
     
  };


 const sentence=()=>{
  let newtext = capitalizeWords(text);
  SetText(newtext);
  props.showalert("First letter captalized","success");
}

const cleartext=()=>{
  SetText('');
  props.showalert('TEXT AREA CLEARED!',"danger")
}
  const handledownclick=()=>{
    let newtext=text.toLowerCase();
    SetText(newtext);
    props.showalert("converted to lowercase" ,"success");
  }


    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        SetText(newtext);
        props.showalert("CONVERTED TO UPPERCASE","success");
    }

    const handleonchange=(event)=>{
SetText(event.target.value);

    }
const [text , SetText]=useState('');
  return (
    <>
    {/*<div className={`"container" text-${ props.mode==='light'?'dark':'light' }`}>*/}
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    <div className="mt-3">

    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className={`form-control text-${ props.mode === 'dark' ? 'white' : 'black'}`} value={text}    style={{ backgroundColor: props.mode === 'dark' ? ' #600047' : 'white' } } onChange={handleonchange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupclick}>UPPER CASE</button>
<button className="btn btn-primary mx-1" onClick={handledownclick}>lower case</button>
<button className="btn btn-primary mx-1" onClick={sentence}>Captalized </button>
<button className="btn btn-primary mx-1" onClick={alternate}>AlTeRnAtE</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick }>Copy!</button>
<button className="btn btn-primary mx-1" onClick={extraspaces}>removeextraspace</button>
<button className="btn btn-danger mx-1" onClick={cleartext}>ClearAll</button>
    </div>
    </div>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1> your Text summary</h1>
      <b><p> {text.split(" ").length} words and {text.length}</p></b>
      <p> {0.008 * text.split(" ").length} minutes to read this.</p>
      <h3> preview </h3>
      <p> {text}</p>
    </div>
    </>
  )
}

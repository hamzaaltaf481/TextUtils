import React,{useState} from 'react'

export default function Text(props) {
const[Text,setText] = useState("")
const[Find,FindText] = useState("")
const[Rep,RepText] = useState("")
const handleUpClick = () => {
    console.log("UpperCase Clicked")
    setText(Text.toUpperCase())
    props.showAlert("Converted To UpperCase","success")
}
const handleLowClick = () => {
    console.log("LowerCase Clicked")
    setText(Text.toLowerCase())
    props.showAlert("Converted To LowerCase","success")
}
const handleOnChange = (event) => {
    console.log("Onchanged Text")
    setText(event.target.value)
}
const handleOnFind = (event) => {
    console.log("OnFind Text")
    FindText(event.target.value)
    
}
const handleOnRep = (event) => {
    console.log("OnReplaced Text")
    RepText(event.target.value)
    setTimeout(() => {
        props.showAlert("Text Replaced","success")
    }, 3000);
}
let newText = Text.replace(Find,Rep)

  return (
    <>
    <div className ={`container my-3 text-${props.mode === 'light'? 'dark':'light'}`}>
    <h1>{props.heading}</h1>
            <textarea className={`form-control text-${props.mode === 'light'? 'dark':'light'}`} id="mybox" rows="8" value={newText} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? '#6c757d':'white'}}></textarea>
            <button className="btn btn-primary mx-1 my-3"onClick={handleUpClick}>Convervet To UpperCase</button>
            <button className="btn btn-primary mx-1 "  onClick={handleLowClick}>Convert To LowerCase</button>
        
            <h4>Find</h4>
            <textarea id="mybox" cloumns ="4" rows= "1" value= {Find} onChange={handleOnFind}></textarea>
            <h4>Replace</h4>
            <textarea cloumns ="4" rows= "1" value= {Rep} onChange={handleOnRep}></textarea>
            <h2>Your Text Summary</h2>
            <p>{Text.split(" ").length-1} words & {Text.length} characters</p>
            <p>{0.008 * Text.split(" ").length } Minutes Read</p>
            <h2>Preview</h2>
            <p>{newText.length>0?newText:"Enter some Text above to preview it"}</p>
   </div>
    </>
  )
}

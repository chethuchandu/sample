import React,{useState} from 'react'
function Header(){
const[count,setText]=useState([{name1:}]);
{name1:"eat"},
{name2:"sleep"},
{name3:"code"}
]);
const [index,setIndex]=useState(0)
function Change(){
  const newindex=(index+1)%texts.length
  setIndex(newindex)
    return(
    <div>
<button onClick={change}>Text change</button>
   <span>{text}</span>
    </div>
    )
}
export default Header
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [date,setdate] = useState();
  let [date1,setdate1] = useState();
  let [year,setyear] = useState();
  let [mont,setmont] = useState();
  let [wee,setwee] = useState();
  let [da,setda] = useState();
  let [hh,sethh] = useState();
  let [mm,setmm] = useState();
  let [ss,setss] = useState();


  function button(){
    let date = new Date();
    let year = date.getFullYear();
    let month1 = date.getMonth();
    let day = date.getDate();
  }

  function calcu() {
      if(date == '')
      {
        alert("def- date")
        return false
      }
      if(date1 == '')
      {
        alert("birthday date")
        return false
      }

      // setyear(parseInt(date)-parseInt(date1))

      let deage = new Date((date1));
      // console.log(deage);

      let nedate = new Date();

      let year = nedate - deage;
      console.log(year);

      let years = Math.floor(year / (365*24*60*60*1000));

      let month2 = Math.floor(year / (30*24*60*60*1000));
      let wee = Math.floor(year / (7*24*60*60*1000));
      let day = Math.floor(year / (24*60*60*1000));
      let hours = Math.floor(year / (60*60*1000));
      let minits = Math.floor(year / (60*1000));
      let secon = Math.floor(year / (1000));


      setyear(years)
      setmont(month2)
      setwee(wee)
      setda(day)
      sethh(hours)
      setmm(minits)
      setss(secon)
  }


  return (
    <>
    <h5>def-date : <input type='date' onChange={(e) => { setdate(e.target.value) }}></input></h5>
    <h5>Enter birthday date : <input type='date' onChange={(e) => { setdate1(e.target.value) }}></input></h5>
    <input type='button' value={"click me"} onClick={calcu}></input>
    <br></br><br></br>

    year = {year}<br></br>
    Month = {mont}<br></br>
    Week = {wee}<br></br>
    Days = {da}<br></br>
    Hours = {hh}<br></br>
    Minutes = {mm}<br></br>
    Seconds = {ss}<br></br>

    </>
  );
}

export default App;

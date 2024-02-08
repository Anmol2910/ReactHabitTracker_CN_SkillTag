import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";

const DayView = ({day}) => {
 // Get today's date
  const today=new Date();
   // Get the day from today's date
  const todayDay=today.getDay();

  // Call useDispatch hook and create a variable called dispatch
  const dispatch=useDispatch();

  // Get date details from the provided date and time
  const date=new Date(day.yyyy,day.mm,day.dd);

  // Function called after clicking the done icon
  const markToDone=()=>{
    if(day.id>todayDay){
      alert("Sorry! You can't change your upcoming days status")
      return;
    }
     // Call habit done action from reducer
    dispatch(habitDone(day.id));
  }

// Function called after clicking the undone icon
  const markToUnDone=()=>{
    if(day.id>todayDay){
      alert("Sorry! You can't change your upcoming days status")
      return;
    }
     // Call habit undone action from reducer
    dispatch(habitUnDone(day.id))
  }
  // --------------------------------------------------

 // Function called after clicking the none icon
  const markToNone=()=>{
    if(day.id>todayDay){
      alert("Sorry! You can't change your upcoming days status")
      return;
    }
    // Call habit none action from reducer
    dispatch(habitNone(day.id));
  }
  // -------------------------------------------------


  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
    </div>
  );
};

export default DayView;
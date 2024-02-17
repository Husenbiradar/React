import React from 'react'
import useThem from '../context/Theem'

function ThemeBtn() {

    const {themMode, lightTheme,darkTheme}=useThem()

    const onChangeBtn=(e)=>{
        const darkModeStauts =e.currentTarget.checked
        if(darkModeStauts) {
            darkTheme()
        }
        else{
            lightTheme()
        }
    }
  return (
    <div className="form-check form-switch pb-3  d-flex ">
    <input className="form-check-input"
    
    onChange={onChangeBtn}
    checked = {themMode === 'dark'}
    type="checkbox" id="flexSwitchCheckChecked"  />
    <label className="form-check-label ps-2" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
  </div>
  )
}

export default ThemeBtn

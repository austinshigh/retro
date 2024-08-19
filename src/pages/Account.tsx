import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {
  selectUserName,
  updateUserName,
} from "../components/navigation/navBarSlice"
import { useAppSelector } from "../app/hooks"

const Account = () => {
  const [inputName, setInputName] = useState("")
  const username = useAppSelector(selectUserName)

  const dispatch = useDispatch()
  return (
    <div>
      <input
        className="profile__input username"
        placeholder={username}
        onChange={(e): any => setInputName(e.target.value)}
      ></input>
      <div onClick={() => dispatch(updateUserName(inputName))}>Submit</div>
    </div>
  )
}

export default Account

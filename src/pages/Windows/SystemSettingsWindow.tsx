import React, { useState } from "react"
import styled from "styled-components"
import RadioComponent from "../../components/RadioComponent"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  changeColor,
  ColorNames,
} from "../../components/backgroundColor/backgroundColor"
import { selectColor } from "../../components/backgroundColor/backgroundColor"

const SystemSettingsWindow = () => {
  const dispatch = useAppDispatch()
  const color = useAppSelector(selectColor)

  const handleChangeColor = (color: ColorNames) => {
    dispatch(changeColor(color))
  }

  return (
    <Container>
      <div>Desktop Color:</div>
      <RadioComponent color={color} setColor={handleChangeColor} />
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  z-index: 2000;
`

export default SystemSettingsWindow

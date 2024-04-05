import { CSSProperties } from "react";

export const deleteModalStyle: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#fff',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '400px',
  zIndex: '99999',
  textAlign: 'center',
  padding: '15px',
  boxShadow: "0px 0px 48px -3px rgba(0,0,0,0.75)"
}


import { CSSProperties } from "react";

export const productCardStyles: CSSProperties = {
  borderRadius: '20px',
  marginBottom: '40px',
  height: '100%'
}

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
  padding: '15px'
}
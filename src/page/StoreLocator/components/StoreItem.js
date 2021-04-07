import React from 'react'
import { style } from "typestyle";

export default function StoreItem({ name, address, phone, store_hours, onClick }) {

  const styles = {
    styleItem: style({
      padding: '1rem',
      cursor: 'pointer',
      transition: 'all .15s ease-in-out',
      borderLeft: '1px solid #e5e5e5',
      padding: '1.5rem !important',
      textAlign: 'justify',
      "&:hover": {
        opacity: 0.8
      }
    }),
    mrBottom: {
      marginBottom: '0.7rem'
    }
  }

  return (
    <div className={`card-body border-top ${styles.styleItem}`} onClick={onClick}>
      {/* Heading */}
      <p className="font-weight-bold" style={{ color: 'red' }} >{name}</p>
      <p style={styles.mrBottom}>
        <strong style={styles.styleP}>Address: </strong>{address}
      </p>
      <p style={styles.mrBottom}>
        <strong>Phone: </strong>
        <a className="text-gray-500" href="tel:6-146-389-574">{phone}</a>
      </p>
      <p className="mb-0">
        <strong>Store Hours:</strong> <br />
        <span className="text-gray-500">{store_hours}</span>
      </p>
    </div>
  )
}
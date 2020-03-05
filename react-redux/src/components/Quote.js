import React from 'react'

function Quote({quote: {quoteAuthor,quoteText}}) {
 
  return (
    <div style={{width: '700px', padding:'20px 40px', backgroundColor: 'pink', margin: '10px auto'}}>
      <p>Title: {quoteText}</p>
      <p>Author: {quoteAuthor}</p>
    </div>
  )
}

export default Quote

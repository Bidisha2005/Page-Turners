import React from 'react'

function Cards({item}) {
  
  const handleBuyNowClick = () => {
    if (item.pdfUrl) { // Check if pdfUrl exists
      window.open(item.pdfUrl, '_blank'); // Open the URL in a new tab
    } else {
      console.error('PDF URL not found for this item.');
      // Optionally, display an error message to the user
      alert('PDF URL not available.');
    }
  };

  return (
    <>
    <div className='mt-4 my-3 p-3 '>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200  dark:bg-slate-800 dark:text-white">
  <figure>
    <img
      src={item.image} alt="items" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-blue-300 hover:text-black px-2 py-1 duration-200"onClick={handleBuyNowClick}>Click Here</div>
    </div>
  </div>
</div>
        </div></>
  )
}

export default Cards
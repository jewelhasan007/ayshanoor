import React from 'react';

const amI = [
    {id:1, "title":"Blog", "description":"Best Organic Beauty Care Products in the USA", "image": './blog1.jpg' },
    {id:2, "title":"Blog", "description":"Best Organic Beauty Care Products in the USA", "image": './blog2.jpg' },
    {id:3, "title":"Blog", "description":"Best Organic Beauty Care Products in the USA", "image": './blog3.jpg' },
    {id:4, "title":"Blog", "description":"Best Organic Beauty Care Products in the USA", "image": './blog logo.jpg' },
    
]
const page = () => {
    return (
      
          <div  className='mt-3 '>
           
  <h2 className="lg:text-center font-bold text-red-500 text-4xl">
    
   Blogs
  </h2>
<div className='grid lg:grid-cols-3 lg:place-items-center gap-10 m-3 p-3'>
             {
            amI.map((item)=>(

                 <div key={item.id} className="card bg-base-100 w-96 shadow-sm  min-h-[400px] shadow-indigo-500/50 ">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl"
      width='150px'
      height='150px' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.title}</h2>
    <p className='text-justify'>{item.description}</p>

  </div>
</div>
            ))
           }
           </div>
          </div>
     
    );
};

export default page;
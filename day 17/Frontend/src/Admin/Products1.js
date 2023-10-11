



// import React, { useState } from 'react';
// import { TopBar } from '../Bar/TopBar';
// import { SideBar } from '../Bar/SideBar';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import '../Admin/Product.css';

// export const Products1 = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial image index

//   const images = [
//     'https://newassets.apollo247.com/pub/media/catalog/product/m/e/med0031_1.jpg',
//     'https://tse4.mm.bing.net/th?id=OIP.eRCBh1SeHKhmKewhOUWadwHaHa&pid=Api&P=0&h=180',
//     'https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0&h=180',
//     // Add more image URLs here
//   ];

//   const nextImage = () => {
//     if (currentImageIndex < images.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   return (
//     <div>
//       <TopBar />
//       <SideBar />
//       <div className="flex-container1">
//         <div className="flex-row2">
//           <div className="flex-item3">
//             <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//             {/* Display image based on the current index */}
//             <p>Id: {currentImageIndex + 1}</p>
//             <p>Category: Soap</p>
//             <p>Name: Medimix</p>
//             <p>Availability: 40</p>
//           </div>
//           <div className="flex-item3">
//             <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//             {/* Display image based on the current index */}
//             <p>Id: {currentImageIndex + 1}</p>
//             <p>Category: Soap</p>
//             <p>Name: Medimix</p>
//             <p>Availability: 40</p>
//           </div>
//           <div className="flex-item3">
//             <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//             {/* Display image based on the current index */}
//             <p>Id: {currentImageIndex + 1}</p>
//             <p>Category: Soap</p>
//             <p>Name: Medimix</p>
//             <p>Availability: 40</p>
//           </div>
          
//           {/* ... Render other images similarly */}
//         </div>
//         <div className="flex-row2">
//           <div className="flex-item3">
//             <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//             {/* Display image based on the current index */}
//             <p>Id: {currentImageIndex + 1}</p>
//             <p>Category: Soap</p>
//             <p>Name: Medimix</p>
//             <p>Availability: 40</p>
//           </div>
//           <div className="flex-item3">
//             <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//             {/* Display image based on the current index */}
//             <p>Id: {currentImageIndex + 1}</p>
//             <p>Category: Soap</p>
//             <p>Name: Medimix</p>
//             <p>Availability: 40</p>
//           </div>
//           <div className="flex-item3">
//             <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//             {/* Display image based on the current index */}
//             <p>Id: {currentImageIndex + 1}</p>
//             <p>Category: Soap</p>
//             <p>Name: Medimix</p>
//             <p>Availability: 40</p>
//           </div>
          
          
//         </div>
//       </div>
  
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { TopBar } from '../Bar/TopBar';
// import { SideBar } from '../Bar/SideBar';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import '../Admin/Product.css';

// export const Products1 = () => {
//   // Initialize images with the initial set of images
//   const initialImages = [
//     'https://newassets.apollo247.com/pub/media/catalog/product/m/e/med0031_1.jpg',
//     'https://tse4.mm.bing.net/th?id=OIP.eRCBh1SeHKhmKewhOUWadwHaHa&pid=Api&P=0&h=180',
//     'https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0&h=180',
//     'https://tse1.mm.bing.net/th?id=OIP.e8aK-NaS4qyZ9px2A6kLfwHaE8&pid=Api&P=0&h=180',
//   ];

//   const [images, setImages] = useState(initialImages);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial image index

//   const nextImage = () => {
//     if (currentImageIndex < images.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   // Function to add a new image to the images array
//   const addNewImage = (imageUrl) => {
//     // Create a copy of the current images array and add the new image URL
//     const updatedImages = [...images, imageUrl];
    
//     // Update the state with the new images array and reset the current index
//     setImages(updatedImages);
//     setCurrentImageIndex(0); // Reset to the first image
//   };

//   return (
//     <div>
//       <TopBar />
//       <SideBar />
//       <div className="flex-container1">
//         <div className="flex-row2">
//           {images.map((imageUrl, index) => (
//             <div className="flex-item3" key={index}>
//               <img src={imageUrl} alt={`Image ${index + 1}`} />
//               {/* Display image based on the current index */}
//               <p>Id: {index + 1}</p>
//               <p>Category: Soap</p>
//               <p>Name: Medimix</p>
//               <p>Availability: 40</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <div className='circle-container'>
//         <div className='arrow' onClick={prevImage}><ArrowForwardIosIcon /></div>
//         <div className='arrow' onClick={nextImage}><ArrowForwardIosIcon /></div>
//       </div> */}
//       {/* Button to add a new image */}
//       <button onClick={() => addNewImage('URL_OF_NEW_IMAGE')}>Add New Image</button>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { TopBar } from '../Bar/TopBar';
// import { SideBar } from '../Bar/SideBar';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import '../Admin/Product.css';

// export const Products1 = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial image index

//   const images = [
//     ' https://tse1.mm.bing.net/th?id=OIP.e8aK-NaS4qyZ9px2A6kLfwHaE8&pid=Api&P=0&h=180',
//     'https://tse1.mm.bing.net/th?id=OIP.MaRera5xQXBNg4FjFMzgqAHaE1&pid=Api&P=0&h=180',
//     'https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0&h=180',
//     'https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0&h=180',
//     'https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0&h=180',
//     'https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0&h=180',
//     // Add more image URLs here
//   ];
//   const image=[
//     'https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0&h=180',
//   ]

//   const imagesPerRow = 3; // Number of images to display per row

//   // const nextImage = () => {
//   //   if (currentImageIndex < images.length - 1) {
//   //     setCurrentImageIndex(currentImageIndex + 1);
//   //   }
//   // };

//   // const prevImage = () => {
//   //   if (currentImageIndex > 0) {
//   //     setCurrentImageIndex(currentImageIndex - 1);
//   //   }
//   // };

//   return (
//     <div>
//       <TopBar />
//       <SideBar />
//       <div className="flex-container1">
//         {Array.from({ length: Math.ceil(images.length / imagesPerRow) }).map((_, rowIndex) => (
//           <div className="flex-row2" key={rowIndex}>
//             {images.slice(rowIndex * imagesPerRow, (rowIndex + 1) * imagesPerRow).map((imageUrl, index) => (
//               <div className="flex-item3" key={index}>
//                 <img src={imageUrl} alt={`Image ${currentImageIndex + 1}`} />
//                 {/* Display image based on the current index */}
//                 <p>Id: {currentImageIndex + 1}</p>
//                 <p>Category: snacks</p>
//                 <p>Name: Medimix</p>
//                 <p>Availability: 40</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       {/* <div className='circle-container'>
//         <div className='arrow' onClick={prevImage}><ArrowForwardIosIcon /></div>
//         <div className='arrow' onClick={nextImage}><ArrowForwardIosIcon /></div>
//       </div> */}
//     </div>
//   );
// }


import React, { useState } from 'react';
import { TopBar } from '../Bar/TopBar';
import { SideBar } from '../Bar/SideBar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Admin/Product.css';

export const Products1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial image index

  const products = [
    {
      id: 7,
      // name: 'Product 1',
      category: 'Category 1',
      imageURL: 'https://tse1.mm.bing.net/th?id=OIP.e8aK-NaS4qyZ9px2A6kLfwHaE8&pid=Api&P=0&h=180',
      availability: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      imageURL: 'https://example.com/image2.jpg',
      category: 'Category 2',
      availability: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      imageURL: 'https://example.com/image3.jpg',
      category: 'Category 3',
      availability: 30,
    },
    // Add more products here with unique id, name, imageURL, category, and availability
  ];

  const nextImage = () => {
    if (currentImageIndex < products.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div>
      <TopBar />
      <SideBar />
      <div className="flex-container1">
        <div className="flex-row2">
          <div className="flex-item3">
            <img src={products[currentImageIndex].imageURL} alt={`Image ${currentImageIndex + 1}`} />
            {/* Display product details */}
            <p>Id: {products[currentImageIndex].id}</p>
            <p>Category: {products[currentImageIndex].category}</p>
            <p>Name: {products[currentImageIndex].name}</p>
            <p>Availability: {products[currentImageIndex].availability}</p>
          </div>
          {/* ... Render other products similarly */}
        </div>
      </div>
      <div className='circle-container'>
        <div className='arrow' onClick={prevImage}><ArrowForwardIosIcon /></div>
        <div className='arrow' onClick={nextImage}><ArrowForwardIosIcon /></div>
      </div>
    </div>
  );
}









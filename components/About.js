import React from 'react'
import { AiOutlineGift } from 'react-icons/Ai'
import Hea from '../components/Hea'
// import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { FirebaseApp } from 'firebase/app';
import { getStorage,ref, uploadBytesResumable } from 'firebase/storage';

const About = () => {

  const [image, setImage] = useState(null);

const handleChange = e => {
  setImage(e.target.files[0]);
};
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Upload the image to Firebase Storage

    
const storage = getStorage();
const storageRef = ref(storage,"/downloa.jpg");
// const s = ref(storage,)
// const storageRef = storage.child(`images/${image.name}`);
   // const storageRef = getStorage().ref();
    // const fileRef = storageRef.child(`images/${image.name}`);
    // const snapshot = await storageRef.put(image);
  
    // // Get the image's URL from Firebase Storage
    // const imageURL = await snapshot.ref.getDownloadURL();
  
    // // Store the image's URL in Firestore
    // database.collection('images').add({ imageURL });
  const uploadTask = uploadBytesResumable(storageRef);
  
// Pause the upload
uploadTask.pause();

// Resume the upload
uploadTask.resume();

};
  return (
    <section className='container mx-auto py-10 px-4'>
        <Hea title="About Me" />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px]'>
          <div >
            <img className='w-[400px]'src='/downl.jpg' alt=''/>
          </div>
          <div className='flex items-center justify-between w-[300px]'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-4 items-center font-medium'>
                <AiOutlineGift className='text-[#f8251e] text-[22px]'/>
                birthday
                
              </div>
              <div className='flex gap-4 items-center font-medium'>
                <AiOutlineGift className='text-[#f8251e] text-[22px]'/>
                study
                
              </div>
              <div className='flex gap-4 items-center font-medium'>
                <AiOutlineGift className='text-[#f8251e] text-[22px]'/>
                website
                
              </div>
              <div className='flex gap-4 items-center font-medium'>
                <AiOutlineGift className='text-[#f8251e] text-[22px]'/>
                location
                
              </div>

            </div>
            <div className='flex flex-col gap-6 text-gray-600'>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className='flex flex-col gap-6 text-gray-600'>
              <div>24-2-2034</div>
              <div>fjfjksjksj</div>
              <div>www.gjdjfkj.com</div>
              <div>fvdfvdfvf</div>
            </div>

          </div>
          <div className='max-w-[800px]'>
            <h2 className='font-bold mt-16 mb-10' >  i am  sharjeel now i am front end developer to </h2>
            <p className=' text-gray-600'> in a professional context it often heppens that private clients a publication
                        order now</p>
            <button className=' bg-[#f8251e]  text-white py-2 px-4 rounded inline-block mt-10
        font-medium border border-[#f8251e] hover:bg-transparent hover:text-[#f8251e]
        transition duration-200 '> Hire Me  </button>
        {/* <form onSubmit={handleSubmit}>
  <input type="file" onChange={handleChange} />
  <button type="submit">Upload Image</button>
</form> */}

          </div>

        </div>
    </section>
  )
}

export default About
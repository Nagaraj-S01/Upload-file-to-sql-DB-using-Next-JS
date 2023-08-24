"use client";
import {useEffect, useState} from 'react'


export default function Home() {
  const [img, setImage] = useState('')
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('/api', {method: 'GET'})
    const res = await data.json()
    setImage(res.result[1].Img)
  }
  const showFile = async (e: any) => {
    e.preventDefault();
    const file = await convertbase64(e.target.files[0])
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ file }),
      headers: {
        "Content-Type": "application/json",
      },
  };
    await fetch("/api", requestOptions).then((res) => console.log(res));
  };

  const convertbase64 = (file : any) => {
    return new Promise((resolve, reject) => {
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.onload = () => {
        resolve(fr.result)
      }
      fr.onerror = (err) => reject(err)
    })
  }
  return (
    <>
      <form> 
      <input type="file"
        id="myFile"
        name="fileName" 
        onChange={(e) => showFile(e)}
      />
      <button >Submit</button>
      </form>
     
      <img id="img" src={img} />
    </>
  );
}

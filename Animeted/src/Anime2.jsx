import React, { useEffect } from 'react'

const Anime2 = () => {

    useEffect(()=>{
        const loadScript= async ()=>{
            try{
                await new Promise((resolve, reject)=>{
                    const script= document.createElement('script')
                    script.src= 'https://static-bundles.visme.co/forms/vismeforms-embed.js'
                    script.onload=resolve;
                    script.onerror= reject;
                    document.body.appendChild(script)
                })

            }
            catch(err){
                console.error("Error :", err)
            }
        }
        loadScript()
        return ()=>{
            //  clwea
        }
    },[])
  return (
    <div>
      <div className="visme_d" data-title="Untitled Project" data-url="4d7m8zo9-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="27519"></div>
    </div>
  )
}

export default Anime2

import React, { useState } from 'react'

export default function About() {
    const [text,settext]=useState("Enable Dark Mode");
    const [Mysty,setMysty]=useState({ 
        color:'white',
    backgroundColor:"black"
})
    const toggle=()=>{
        if (Mysty.color==='white')
        {
            setMysty({
                color:'black',
                backgroundColor:"white"
            })
            settext("Enable Dark Mode")
        }
        else
        {
            setMysty({
                color:'white',
                backgroundColor:"black",
                border:"2px solid white",
            })
            settext("Enable Light Mode")

        }
    }
    
  return (
    <>
    <div className="container my-3" style={Mysty}>
        <h1>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={Mysty}>
        Books
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={Mysty}>
      <div className="accordion-body">
        <strong style={Mysty}>Book Reading</strong>
       <p style={Mysty}> A growing body of research indicates that reading literally changes your mind.

Using MRI scans, researchers have confirmedTrusted Source that reading involves a complex network of circuits and signals in the brain. As your reading ability matures, those networks also get stronger and more sophisticated.

In one studyTrusted Source conducted in 2013, researchers used functional MRI scans to measure the effect of reading a novel on the brain. Study participants read the novel “Pompeii” over a period of 9 days. As tension built in the story, more and more areas of the brain lit up with activity.

Brain scans showed that throughout the reading period and for days afterward, brain connectivity increased, especially in the somatosensory cortex, the part of the brain that responds to physical sensations like movement and pain.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={Mysty}>
        Shopping
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={Mysty}>
      <strong style={Mysty}>Shopping</strong>
       <p style={Mysty}> A growing body of research indicates that reading literally changes your mind.

Using MRI scans, researchers have confirmedTrusted Source that reading involves a complex network of circuits and signals in the brain. As your reading ability matures, those networks also get stronger and more sophisticated.

In one studyTrusted Source conducted in 2013, researchers used functional MRI scans to measure the effect of reading a novel on the brain. Study participants read the novel “Pompeii” over a period of 9 days. As tension built in the story, more and more areas of the brain lit up with activity.

Brain scans showed that throughout the reading period and for days afterward, brain connectivity increased, especially in the somatosensory cortex, the part of the brain that responds to physical sensations like movement and pain.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={Mysty}>
        Food
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={Mysty}>
      <strong style={Mysty}>Fast Food</strong>
       <p style={Mysty}> A growing body of research indicates that reading literally changes your mind.

Using MRI scans, researchers have confirmedTrusted Source that reading involves a complex network of circuits and signals in the brain. As your reading ability matures, those networks also get stronger and more sophisticated.

In one studyTrusted Source conducted in 2013, researchers used functional MRI scans to measure the effect of reading a novel on the brain. Study participants read the novel “Pompeii” over a period of 9 days. As tension built in the story, more and more areas of the brain lit up with activity.

Brain scans showed that throughout the reading period and for days afterward, brain connectivity increased, especially in the somatosensory cortex, the part of the brain that responds to physical sensations like movement and pain.</p>
      </div>
    </div>
  </div>
</div>




<button className='btn btn-dark mt-4' onClick={toggle} > {text}</button>
</div>

    </>
  )
}

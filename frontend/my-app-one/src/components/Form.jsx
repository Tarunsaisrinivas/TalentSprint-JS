import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        skills: "",

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // need to clear form
        
        formData("")
        console.log(formData);
  
    }


    return (
        <div>
            <form action="" className='w-1/4 flex flex-col gap-4 m-4' >
                <input type="text" name="name" id="name" placeholder='Full Name' className='border-1 rounded-md px-3' onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type="email" name="email" id="email" placeholder='Email' className='border-1 rounded-md px-3' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type="tel" name="phone" id="phone" placeholder='Phone Number' className='border-1 rounded-md px-3' onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                <input type="text" name="education" id="education" placeholder='Education' className='border-1 rounded-md px-3' onChange={(e) => setFormData({ ...formData, education: e.target.value })} />
                <input type="text" name="experience" id="experience" placeholder='Experience' className='border-1 rounded-md px-3' onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />
                <input type="skills" name="skills" id="skills" placeholder='Skills' className='border-1 rounded-md px-3' onChange={(e) => setFormData({ ...formData, skills: e.target.value })} />
                <input type="submit" value="Submit" onClick={handleSubmit} className='bg-gray-600 hover:bg-gray-800 text-white py-2 px-4 rounded-xl hover:cursor-pointer  transition duration-200' />
            </form>

        </div>
    )
}

export default Form

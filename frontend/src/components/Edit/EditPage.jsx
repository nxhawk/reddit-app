import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/apiRequests'
import Input from '../InputFields/Input'
import './Edit.css'

const EditPage = ({ setEdit }) => {

  const dispatch = useDispatch()

  const avaUrl = [
    'https://i.redd.it/snoovatar/avatars/244366b9-5019-468c-8093-e2d9ebfb9b81.png',
    'https://i.redd.it/snoovatar/avatars/326f6b7b-8126-4cc5-b946-3488380412d6.png',
    'https://i.redd.it/snoovatar/avatars/c69a11e0-e250-49a8-adea-2f594b77578f.png',
    'https://i.redd.it/snoovatar/avatars/e3209f3a-503e-47f5-93eb-6c42e58b20bb.png',
    'https://i.redd.it/snoovatar/avatars/40e2f7d2-ce24-44fd-b1e3-c66b59bd48d0.png',
    'https://i.redd.it/snoovatar/avatars/dc4d2968-f742-47f9-b82e-5d3444928a54.png',
    'https://i.redd.it/snoovatar/avatars/e05f3583-3bdc-43cd-851e-7398180be181.png',
    'https://i.redd.it/snoovatar/avatars/1b4a3c28-bf82-4260-91ca-a4dd186a4d8d.png',
    'https://i.redd.it/snoovatar/avatars/3efd4030-00ac-4557-9da4-79ad263d4a49.png',
  ]
  const user = useSelector((state) => state.user)
  const [name, setName] = useState(user.name)
  const [age, setAge] = useState(user.age)
  const [about, setAbout] = useState(user.about)
  const [theme, setTheme] = useState(user.theme)
  const [url, setUrl] = useState(user.avaUrl)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEdit(false)
    const updatedUser = {
      name, age, about, avaUrl: url, theme
    }
    updateUser(updatedUser, dispatch)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">SAVE</button>

          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input inputType="textarea" classStyle="input-about" label="About" data={user.about} setData={setAbout} />

            <label>Profile Picture</label>
            <div className="input-image-container">
              {avaUrl.map((url, idx) => {
                return <img src={url} alt="" key={idx} className='input-image' onClick={(e) => setUrl(e.target.src)} />
              })}
            </div>

            <div className="theme-container">
              <label>Theme</label>
              <input type="color" className='theme-color' onChange={(e) => setTheme(e.target.value)} />
            </div>

          </div>
        </section>
      </form>
    </div>
  )
}

export default EditPage
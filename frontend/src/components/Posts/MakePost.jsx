import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/postSlice'
import Input from '../InputFields/Input'
import "./post.css"
//{}[]
const MakePost = ({ setOpen }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("Add a title")
  const [desc, setDesc] = useState("Add some descriptions")
  const [selectedIdx, setSelectedIdx] = useState(0)
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]
  const handlePost = () => {
    setOpen(false)
    const newPost = {
      title,
      description: desc,
      tag: selectedIdx,
    }
    dispatch(createPost(newPost))
  }
  return (
    <section className='makepost-container'>
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title" />
      <Input data={desc} inputType="textarea" setData={setDesc} label="Descriptions" classStyle="makepost-desc" />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, idx) => {
          return <button className={`${selectedIdx === idx ? `makepost-tags-selected` : `makepost-tags-${tag}`}`} key={idx}
            onClick={() => setSelectedIdx(idx)}
          >{tag}</button>
        })}
      </div>
    </section>
  )
}

export default MakePost
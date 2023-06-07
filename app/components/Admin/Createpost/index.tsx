import styles from './Createblog.module.scss'
import { useRef, useState } from 'react'
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import { useMutation } from '@apollo/client'
import { CREATE_POST } from 'apollo/blog';
import remarkGfm from 'remark-gfm'
import Swal from 'sweetalert2';
export default function Part1() {
  const [value, setValue] = useState("xxx");
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [image, setImage] = useState([])

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    width: "400px",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    customClass: {
        container: 'custom-swal-font',
        title: 'custom-swal-font',
        confirmButton: 'custom-swal-font',
      },
  })
  const [createBlog, { loading, error, data }] = useMutation(CREATE_POST, {
    onCompleted: (data) => {
      Toast.fire({
          icon: 'success',
          title: `Congratulations on creating the post`
        })
    } ,
    onError: (error) => {
      Toast.fire({
          icon: 'error',
          title: `${error}`
        })
    } ,
    variables: {image, post:{title, text: value, tags }},
  })

  function handleSubmit() {
    // e.preventDefault()
    // setTitle('')
    // setValue('')
    createBlog()
  }

  const mdEditor = useRef(null);


  const handleEditorChange = ({ html, text }) => {
    // const newValue = text.replace(/\d/g, "");
    const newValue = text;
    console.log(newValue);
    setValue(newValue);
  };

  function onChangeCP({ target: { validity, files } }) {
    if (validity.valid && files && files[0])
    setImage(files)
  }

  return (
    <div className={styles.back}>
      <p className={styles.title}>Blog Creation</p>
      <form onSubmit={() => handleSubmit()}>
        <div>
          <p>Title</p>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <p>Tag</p>
          <input type="text" onChange={(e) => setTags(e.target.value)} />
        </div>
        <div className="App">
      <Editor
        ref={mdEditor}
        value={value}
        className={styles.editor}
        style={{
          height: "500px"
        }}
        onChange={handleEditorChange}
        renderHTML={text => <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />}
      />
    </div>
    <input type="file" required multiple onChange={onChangeCP} className={styles.button}/>

        <button type="submit" className={styles.button}>Send</button>
      </form>
    </div>
  )
}

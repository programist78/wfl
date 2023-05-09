import styles from './Loader.module.scss'
export default function Loader() {
  return (
    <div className={styles.back}>
    <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

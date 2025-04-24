import { FaX } from 'react-icons/fa6'
import styles from './index.module.scss'

export interface ModalProjectsProps {
  name: string
  description: string
  language: string
  srcImage: string
  urlProject: string
  closeModal: any
}

export const ModalProjects = ({name, description, language, srcImage, urlProject, closeModal}: ModalProjectsProps) => {

  const handleCloseModal = () => {
    closeModal(false)
  }
  return (
    <div className={styles.modalContainer}>
      <div className="content">
          <FaX color="var(--color-destaque)" size={20} onClick={handleCloseModal}/>
          <h1>{name}</h1>
          <h1>{description}</h1>
          <h1>{language}</h1>
          <h1>{srcImage}</h1>
          <h1>{urlProject}</h1>
      </div>
    </div>
  );
}
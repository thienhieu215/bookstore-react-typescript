import { Modal, Button } from 'react-bootstrap'
import style from './Dialog.module.scss'

const ConfirmDialog = ({ isOpen, handleClose, title, content, agreeContent, closeContent, func }: ConfirmDialogProps) => {

  return (
    <Modal centered show={isOpen} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{content}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">{closeContent}</Button>
        <button className={style.confirmBtn} onClick={func}>{agreeContent}</button>
      </Modal.Footer>
    </Modal>
  );
};

type ConfirmDialogProps = {
  isOpen: boolean,
  handleClose: () => void,
  title: string,
  content: string,
  agreeContent: string,
  closeContent: string,
  func: () => void
}

export default ConfirmDialog;

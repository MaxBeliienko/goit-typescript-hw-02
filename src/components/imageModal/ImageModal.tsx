import Modal from "react-modal";
import { FC } from "react";
import { Image } from "../../types";

interface ImageModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  modalPhoto: Image | null;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({
  isModalOpen,
  closeModal,
  modalPhoto,
}) => {
  if (!modalPhoto) {
    return null;
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img
        src={modalPhoto.urls.regular}
        alt={modalPhoto.alternative_slugs.en}
      />
    </Modal>
  );
};

export default ImageModal;

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TrashIcon from '../../images/Trashcan.png';
import { playTrashSound } from '../../utils/SoundUtility';

interface TrashcanProps {
  onDeleteRequest: (folderId: string) => void;
}

const Trashcan: React.FC<TrashcanProps> = ({ onDeleteRequest }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [draggedFolderId, setDraggedFolderId] = useState<string | null>(null);
  const wasDraggingOver = useRef(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!wasDraggingOver.current) {
      playTrashSound();
      wasDraggingOver.current = true;
    }
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    wasDraggingOver.current = false;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    wasDraggingOver.current = false;
    
    const folderId = e.dataTransfer.getData('folderId');
    if (folderId) {
      setDraggedFolderId(folderId);
      setShowDeleteConfirm(true);
    }
  };

  const handleConfirmDelete = () => {
    if (draggedFolderId) {
      onDeleteRequest(draggedFolderId);
      setShowDeleteConfirm(false);
      setDraggedFolderId(null);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setDraggedFolderId(null);
  };

  return (
    <>
      <TrashcanContainer
        isDraggingOver={isDraggingOver}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <TrashIconImage src={TrashIcon} alt="Trash" />
        <TrashLabel>Trash</TrashLabel>
      </TrashcanContainer>

      {showDeleteConfirm && (
        <DeleteConfirmDialog>
          <DeleteConfirmContent>
            <h3>Delete Folder</h3>
            <p>Are you sure you want to move this folder to trash?</p>
            <ButtonGroup>
              <Button onClick={handleConfirmDelete}>Delete</Button>
              <Button onClick={handleCancelDelete}>Cancel</Button>
            </ButtonGroup>
          </DeleteConfirmContent>
        </DeleteConfirmDialog>
      )}
    </>
  );
};

const TrashcanContainer = styled.div<{ isDraggingOver: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: ${props => props.isDraggingOver ? 'rgba(255, 0, 0, 0.1)' : 'transparent'};
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(100%) brightness(1.2);
  }
`;

const TrashIconImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
`;

const TrashLabel = styled.div`
  font-family: "VT323", monospace;
  font-size: 16px;
  color: #000;
`;

const DeleteConfirmDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const DeleteConfirmContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "VT323", monospace;

  h3 {
    margin: 0 0 10px 0;
    font-size: 20px;
  }

  p {
    margin: 0 0 20px 0;
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button`
  font-family: "VT323", monospace;
  font-size: 16px;
  padding: 5px 15px;
  border: 1px solid #000;
  background: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;

export default Trashcan; 
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  items: {
    label: string;
    onClick: () => void;
  }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose, items }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <MenuContainer ref={menuRef} x={x} y={y}>
      {items.map((item, index) => (
        <MenuItem key={index} onClick={() => {
          item.onClick();
          onClose();
        }}>
          {item.label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

interface MenuPosition {
  x: number;
  y: number;
}

const MenuContainer = styled.div<MenuPosition>`
  position: fixed;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 4px 0;
  z-index: 1000;
  min-width: 150px;
`;

const MenuItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  font-family: "VT323", monospace;
  font-size: 16px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default ContextMenu; 
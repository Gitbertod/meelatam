import React from "react";
import { useState } from 'react';
import { Button, Drawer, Radio, Space } from "antd";

const DrawerNavbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("top");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space>
          <Button type="primary" onClick={showDrawer}>
            Productos
          </Button>
        <Radio.Group value={placement} onChange={onChange}>
        </Radio.Group>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>RESPALDO DE ENERGÍA</p>
        <p>CALIDAD DE ENERGÍA</p>
        <p>CLIMA DE PRECISION</p>
      </Drawer>
    </>
  );
};

export default DrawerNavbar;

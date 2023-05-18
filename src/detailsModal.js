import { Button, Modal } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
const DetailsModal = ({ id, isDetailsModalOpen, setIsDetailModalOpen }) => {
  const studentData = useSelector((state) => state.studentReducer.students);
  const student = studentData?.filter((item) => item.id === id)[0];
  const handleOk = () => {
    setIsDetailModalOpen(false);
  };
  const handleCancel = () => {
    setIsDetailModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Student Details"
        open={isDetailsModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{student?.id}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default DetailsModal;

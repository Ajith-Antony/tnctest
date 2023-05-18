import logo from "./logo.svg";
import "./App.css";
import { Button, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DetailsModal from "./detailsModal";

function Students() {
  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate("/");
  };
  const onAddButtonClick = () => {
    setIsAddsModalOpen(true);
  };
  const studentDetails = useSelector((state) => state.studentReducer);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isAddsModalOpen, setIsAddsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [newStudentData, setNewStudentData] = useState({
    age: "",
    name: "",
    id: "",
    adress: "",
    img: "",
  });
  const [studentImg, setImg] = useState("");
  const onStudentClick = (id) => {
    setIsDetailsModalOpen(true);
    setCurrentId(id);
  };
  const onInputChange = (type, value) => {
    setNewStudentData((prv) => ({ ...prv, [type]: value }));
  };
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  const onUpload = async (e) => {
    const base64Image = await toBase64(e.target.files[0]);
    setNewStudentData((prv) => ({ ...prv, img: base64Image }));
    setImg(e.target.files[0]);
    // console.log(response);
  };
  return (
    <>
      <div className="details">
        <div className="header">
          <Button onClick={onBackButtonClick}>back</Button>
          <p>Students List</p>
          <Button type="primary" onClick={onAddButtonClick}>
            Add
          </Button>
        </div>
        <div className="studentList">
          {studentDetails.students.map((item) => (
            <div className="item" onClick={() => onStudentClick(item.id)}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <DetailsModal
        id={currentId}
        isDetailsModalOpen={isDetailsModalOpen}
        setIsDetailModalOpen={setIsDetailsModalOpen}
      />
      <Modal
        open={isAddsModalOpen}
        onCancel={() => setIsAddsModalOpen(false)}
        title="Add Student"
      >
        <Input
          placeholder="Enter Name"
          value={newStudentData.name}
          onChange={(e) => onInputChange("name", e.target.value)}
        />
        <Input
          placeholder="Enter Age"
          value={newStudentData.age}
          onChange={(e) => onInputChange("age", e.target.value)}
        />
        <Input
          placeholder="Enter Adress"
          value={newStudentData.adress}
          onChange={(e) => onInputChange("adress", e.target.value)}
        />
        <Input
          placeholder="Enter Id"
          value={newStudentData.id}
          onChange={(e) => onInputChange("id", e.target.value)}
        />
        <input type="file" onChange={onUpload}></input>
        <img
          width={"100%"}
          src={URL.createObjectURL(studentImg)}
          alt=""
          className="studentImage"
        ></img>
      </Modal>
    </>
  );
}

export default Students;

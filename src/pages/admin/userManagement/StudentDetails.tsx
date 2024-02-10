import React from "react";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();

  return <div>student details of {studentId}</div>;
};

export default StudentDetails;

import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const user = useGetAllSemestersQuery(undefined);
  console.log(user);

  return <div>Academci semester</div>;
};

export default AcademicSemester;

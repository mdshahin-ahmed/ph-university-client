import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhForm from "../../../components/form/PhForm";
import PhSelect from "../../../components/form/PhSelect";
import { monthOptions } from "../../../constants/global";
import { nameOptions } from "../../../constants/semester";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";

const SemesterRegistration = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating.....");

    const name = nameOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name: name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);

    // try {
    //   const res = (await addAcademicSemester(semesterData)) as TResponse;
    //   if (res.error) {
    //     toast.error(res.error.data.message);
    //   } else {
    //     toast.success("Semester created!", { id: toastId });
    //   }
    //   console.log(res);
    // } catch (error) {
    //   toast.error("Something went wrong", { id: toastId });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PhSelect label="Name" name="name" options={nameOptions} />

          <PhSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PhSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;

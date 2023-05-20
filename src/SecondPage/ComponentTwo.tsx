import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import "./styles.css";

const departments = [
  {
    department: "customer service",
    sub_departments: ["support", "customer success"],
  },

  {
    department: "design",
    sub_departments: ["product design", "graphic design", "web design"],
  },
];

interface CheckedItemsState {
  [parent: string]: boolean;
}

interface departmentInfoState {
  [parent: string]: {
    noOfSubdepartmentsChecked: number;
    isExpanded: boolean;
  };
}

const ComponentTwo: React.FC = () => {
  const [departmentInfo, setDepartmentInfo] = useState<departmentInfoState>({});
  const [checkedItems, setCheckedItems] = useState<CheckedItemsState>({});

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: departmentName, checked } = event.target;
    const department = departments.find(
      (department) => department.department === departmentName
    );

    const sub_departments = department?.sub_departments;
    sub_departments?.map((sub_department: string) => {
      setCheckedItems((prevState) => ({
        ...prevState,
        [sub_department]: checked,
      }));
    });

    setDepartmentInfo((prevState) => ({
      ...prevState,
      [departmentName]: {
        ...prevState[departmentName],
        noOfSubdepartmentsChecked: checked ? sub_departments?.length || 0 : 0,
      },
    }));
  };

  const handleChildChange = (
    parentName: string,
    childName: string,
    isChecked: boolean
  ) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [childName]: isChecked,
    }));

    setDepartmentInfo((prevState) => ({
      ...prevState,
      [parentName]: {
        ...prevState[parentName],
        noOfSubdepartmentsChecked: isChecked
          ? (prevState[parentName]?.noOfSubdepartmentsChecked || 0) + 1
          : (prevState[parentName]?.noOfSubdepartmentsChecked || 0) - 1,
      },
    }));
  };

  const isParentChecked = (parentName: string) => {
    const sub_departments = departments.find(
      (department) => department.department === parentName
    )?.sub_departments;
    return (
      departmentInfo[parentName]?.noOfSubdepartmentsChecked ===
        sub_departments?.length && sub_departments?.length !== 0
    );
  };

  const toggleParent = (parent: string) => {
    setDepartmentInfo((prevState) => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        isExpanded: !prevState[parent]?.isExpanded,
      },
    }));
  };

  return (
    <div>
      <div className="heading">COMPONENT 2</div>
      {departments &&
        departments.map((department) => (
          <>
            <div>
              <IconButton
                onClick={() => toggleParent(department.department)}
                size="small"
                sx={{ marginRight: "4px" }}
              >
                {departmentInfo[department.department]?.isExpanded ? (
                  <Remove />
                ) : (
                  <Add />
                )}
              </IconButton>
              <FormControlLabel
                control={
                  <Checkbox
                    name={department.department}
                    checked={isParentChecked(department.department)}
                    onChange={handleParentChange}
                  />
                }
                label={department.department}
              />
            </div>
            {departmentInfo[department.department]?.isExpanded && (
              <div>
                {department.sub_departments &&
                  department.sub_departments.map((sub_department) => (
                    <div
                      style={{
                        marginLeft: "70px",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={sub_department}
                            checked={checkedItems[sub_department] || false}
                            onChange={(event) =>
                              handleChildChange(
                                department.department,
                                sub_department,
                                event.target.checked
                              )
                            }
                          />
                        }
                        label={sub_department}
                      />
                    </div>
                  ))}
              </div>
            )}
          </>
        ))}
    </div>
  );
};

export default ComponentTwo;

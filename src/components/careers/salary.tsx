// SalaryInput.tsx
import React, { useState } from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface SalaryInputProps {
  onSalaryChange: (salary: string) => void;
}

const SalaryInput: React.FC<SalaryInputProps> = ({ onSalaryChange }) => {
  const { t } = useTranslation();
  const [salary, setSalary] = useState<string>("");

  const formatNumberWithCommas = (number: string): string => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(value)) || value === "") {
      setSalary(formatNumberWithCommas(value));
      onSalaryChange(value);
    }
  };

  return (
    <InputGroup>
      <InputLeftElement>
        <FaDollarSign color="gray.300" />
      </InputLeftElement>
      <Input
        id="salary"
        value={salary}
        onChange={handleSalaryChange}
        placeholder={t("salary")}
        bg={"gray.100"}
        border={0}
        color={"gray.500"}
        _placeholder={{
          color: "gray.500",
        }}
      />
    </InputGroup>
  );
};

export default SalaryInput;

import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdLocationPin } from "react-icons/md";
import { debounce } from "lodash";
import { useTranslations } from "next-intl";

interface JobSearchProps {
  onSearch: (jobTitle: string, location: string) => void;
}

const JobSearchBar: React.FC<JobSearchProps> = ({ onSearch }) => {
  const t = useTranslations("Careers.Positions.search");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const debouncedHandleSearch = useCallback(
    debounce((jobTitle: string, location: string) => {
      onSearch(jobTitle, location);
    }, 500),
    [onSearch]
  );

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitle(e.target.value);
    debouncedHandleSearch(e.target.value, location);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    debouncedHandleSearch(jobTitle, e.target.value);
  };

  return (
    <div
      className="bg-white md:w-1/2 flex md:flex-row flex-col"
      style={{
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <InputGroup>
        <InputLeftElement color={"purple.300"}>
          <SearchIcon />
        </InputLeftElement>
        <Input
          value={jobTitle}
          _focusVisible={{ border: "none" }}
          focusBorderColor="transparent"
          borderColor={"transparent"}
          border={"none"}
          _hover={{ border: "none" }}
          placeholder={t("job")}
          onChange={handleJobTitleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement color={"purple.300"}>
          <MdLocationPin />
        </InputLeftElement>
        <Input
          value={location}
          focusBorderColor="transparent"
          _focusVisible={{ border: "none" }}
          _hover={{ border: "none" }}
          border={"none"}
          placeholder={t("location")}
          onChange={handleLocationChange}
        />
      </InputGroup>
    </div>
  );
};

export default JobSearchBar;

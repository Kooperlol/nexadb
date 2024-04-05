import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdLocationPin } from "react-icons/md";
import { debounce } from "lodash";

interface JobSearchProps {
  onSearch: (jobTitle: string, location: string) => void;
}

const JobSearchBar: React.FC<JobSearchProps> = ({ onSearch }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const debouncedHandleSearch = debounce(
    (jobTitle: string, location: string) => {
      onSearch(jobTitle, location);
    },
    500
  );

  useEffect(() => {
    debouncedHandleSearch(jobTitle, location);
  }, [jobTitle, location, debouncedHandleSearch]);

  return (
    <div
      className="bg-white w-1/2 flex flex-row"
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
          placeholder="Job title or keywords"
          onChange={(e) => setJobTitle(e.target.value)}
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
          placeholder="City, state, zip code, or remote"
          onChange={(e) => setLocation(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default JobSearchBar;

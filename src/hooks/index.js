import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../reducers/searchReducer";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};

export const useSearch = (type) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    setSearch(event.target.value);
    dispatch(updateSearch(event.target.value));
  };

  const reset = () => {
    setSearch("");
  };

  return {
    type,
    search,
    onChange,
    reset,
  };
};

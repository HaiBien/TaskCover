import React, { useContext, useState } from "react";
import styles from "./coverLink.module.scss";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";
import { useAppSelector } from "store/hooks";

const CoverLink = () => {
  const { theme } = useContext(ThemeContext);
  const [coverLink, setCoverLink] = useState("");
  const pageInfo = useAppSelector((state) => state.doc.pageInfo);
  const dispatch = useDispatch();

  const handleCoverLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setCoverLink(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const pageData = {
      pageId: pageInfo!.id,
      url: coverLink,
      verticalPosition: 0,
    };

    // mutateUpdatePageCover(pageData, {
    //   onSuccess: async () => {
    //     const updatedPage: PageState = {
    //       ...pageInfo!,
    //       coverPicture: {
    //         ...pageInfo!.coverPicture,
    //         url: coverLink,
    //       },
    //     };

    //     dispatch(setPage(updatedPage));
    //   },
    // });
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="text"
          value={coverLink}
          placeholder="Paste an image link..."
          onChange={handleCoverLinkChange}
          autoFocus
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Works with any image from the web.</p>
    </div>
  );
};

export default CoverLink;

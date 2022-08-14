import React from "react";
// import "./directory-item.styles.scss";
import {
  BackgroundImage,
  DirectoryItemContainer,
  DirectoryItemBody,
} from "./directory-item.styles";
import { Link } from "react-router-dom";
const DirectoryItem = ({ category, title }) => {
  const { id, imageUrl } = category;
  console.log("printing data.. directory.", imageUrl);
  return (
    // <div key={id} className="directory-item-container">
    //   {/* <Link className="nav-links" to={`/${title}`}> */}
    //   <Link to={`/shop/${title}`}>
    //   <div
    //     className="background-image"
    //     style={{
    //       backgroundImage: `url(${imageUrl})`,
    //     }}
    //   >

    //   {/* <img src={imageUrl} alt="image" /> */}

    //   <div className="directory-item-body">
    //       <h2>{title}</h2>
    //       <p>Shop now</p>
    //     </div>
    //   </div>
    //   </Link>
    // </div>

    <DirectoryItemContainer key={id}>
      {/* <Link className="nav-links" to={`/${title}`}> */}
      <Link to={`/shop/${title}`}>
        <BackgroundImage
          // style={{
          //   backgroundImage: `url(${imageUrl})`,
          // }}
          imageUrl={imageUrl}
        >
          {/* <img src={imageUrl} alt="image" /> */}

          <DirectoryItemBody>
            <h2>{title}</h2>
            <p>Shop now</p>
          </DirectoryItemBody>
        </BackgroundImage>
      </Link>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

import React, { useState } from "react";
import { shortTitle } from "../utils";

interface Prop {
  review: any;
}
const Review: React.FC<Prop> = ({ review }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="reviewItem">
      <h4>
        Author: <span>{review?.author}</span>
      </h4>
      <p>
        {readMore ? review?.content : shortTitle(review?.content, 200) + "..."}{" "}
        <span onClick={() => setReadMore((prev) => !prev)}>
          {readMore ? "Read less" : "Read more"}
        </span>
      </p>
    </div>
  );
};

export default Review;

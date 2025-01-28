const ReviewForm = () => {
  const arrayReview = Array.from(Array(6).keys());

  return (
    <form className="">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input type="text" className="form-control" id="username" />
      </div>
      <div className="mb-3">
        <label htmlFor="vote" className="form-label">
          Select vote
        </label>
        <select className="form-select" name="" id="vote">
          {arrayReview.map((curItem) => (
            <option key={curItem} value={curItem}>
              {curItem}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="text">Text of reviews</label>
        <textarea className="form-control" name="" id="text"></textarea>
      </div>
      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;

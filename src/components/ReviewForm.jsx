import { useState } from "react";

const ReviewForm = ({formData, setFormData, onSubmitFunction}) => {
  const arrayReview = Array.from(Array(6).keys());

  //state
  const [error, setError] = useState(false);

  //event function
  const setValue = (event) => {
    const {value, name} = event.target;
//   const newFormData = {...formData};
//   newFormData[name] = value;
//   setFormData = (newFormData);
setFormData({ ...formData, [name]: value });
  }

  const isDataValid = () => {
    if (
      formData.name.length <= 3 ||
      formData.vote < 0 ||
      formData.vote > 5 ||
      (formData.text.length > 0 && formData.text.length < 5)
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    if (!isDataValid()) {
      setError(true);
    } else {
        onSubmitFunction(formData);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input type="text" className="form-control" id="username" 
        value={formData.name} name="name" onChange={setValue} />
      </div>
      <div className="mb-3">
        <label htmlFor="vote" className="form-label">
          Select vote
        </label>
        <select className="form-select" name="vote" id="vote" 
        value={formData.vote} onChange={setValue}>
          {arrayReview.map((curItem) => (
            <option key={curItem} value={curItem}>
              {curItem}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="text">Text of reviews</label>
        <textarea className="form-control" name="text" id="text"
        value={formData.text} onChange={setValue}></textarea>
      </div>
      {error && (
        <div className="alert alert-danger">Incorrect values</div>
      )}

      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;

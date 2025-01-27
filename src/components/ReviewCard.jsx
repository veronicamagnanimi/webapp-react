const ReviewCard = ({review}) => {

    return (

        <div className="card">
            <div className="card-body text-center">
            <h5>Write by: <strong>{review.name}</strong></h5>
        <p><strong>Vote: </strong>{review.vote}</p>
        <p>{review.text}</p>
        <p><strong>Created at: </strong>{review.created_at}</p>
        <p><strong>Updated at: </strong>{review.updated_at}</p>
            </div>
        </div>
    )
}


export default ReviewCard;
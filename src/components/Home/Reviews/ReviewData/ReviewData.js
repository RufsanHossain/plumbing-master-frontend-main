import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import EachReview from '../EachReview/EachReview';

const ReviewData = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        const url = `https://stark-savannah-16317.herokuapp.com/showreviews`;
           fetch(url)
           .then(res => res.json())
           .then(data => setReviews(data))
        },[])

    return (
        <div class="container">
              <div>
                 <h1 class="text-center mt-5 mb-5 serviceheading">Reviews</h1>
              </div>
            <div class="row">
                {
                    reviews.map(ReviewData => <EachReview ReviewData={ReviewData}></EachReview>)
                }
            </div>
        </div>
    );
};

export default ReviewData;
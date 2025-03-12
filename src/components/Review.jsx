import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

// Sample data for reviews with an image and rating property
const allReviews = [
  { id: 1, name: "John Doe", text: "Excellent service! Highly recommended.", image: "https://th.bing.com/th/id/OIP.SVrM_vmlgId9Kb88j_REawHaGY?pid=ImgDet&w=179&h=154&c=7&dpr=1.3", rating: 5 },
  { id: 2, name: "Jane Smith", text: "Very satisfied with the product quality.", image: "https://th.bing.com/th/id/OIP.hOdCWbgqzcOv5kTJVcil2gHaE2?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", rating: 4 },
  { id: 3, name: "Alice Brown", text: "Fantastic experience, will come back!", image: "https://www.sanatiborewells.com/assets/img/borewell-drilling-services-in-Bangalore.jpg", rating: 5 },
  { id: 4, name: "Bob White", text: "Great customer service, fast delivery.", image: "https://th.bing.com/th/id/OIP.CFqYU1jJkpbEXTdbjxeb3AHaEK?w=1280&h=720&rs=1&pid=ImgDetMain", rating: 3 },
  { id: 5, name: "Charlie Green", text: "Good value for money. Worth it!", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/XN/MH/TC/35368416/0-31605400-1490263125-borewell-jpg-500x500.jpg", rating: 4 },
  { id: 6, name: "David Clark", text: "Impressed with the professionalism.", image: "https://tiimg.tistatic.com/fp/1/003/240/fully-automatic-borewell-drilling-service-128.jpg", rating: 5 },
  { id: 7, name: "Eva Blue", text: "Nice selection of products and quick shipping.", image: "https://th.bing.com/th/id/OIP.Wyg-RHV2KNnvkFm98oQFNgAAAA?pid=ImgDet&w=179&h=317&c=7&dpr=1.3", rating: 4 },
  { id: 8, name: "Frank Yellow", text: "The best shopping experience I've had in years.", image: "https://i.ytimg.com/vi/YhdhQ-fbQ1c/maxresdefault.jpg", rating: 5 },
  { id: 9, name: "Grace Red", text: "Affordable prices and great quality.", image: "https://th.bing.com/th/id/OIP.lP-Li7MNttFKsHKxDTB13gHaJ4?w=960&h=1280&rs=1&pid=ImgDetMain", rating: 4 },
  { id: 10, name: "Henry Pink", text: "Will definitely recommend to friends.", image: "https://sanidhyaborewells.com/wp-content/uploads/2023/09/sanidhyaborewells-services.jpeg", rating: 5 },
  { id: 11, name: "Ivy Gray", text: "Reliable and fast service, 5 stars!", image: "https://5.imimg.com/data5/SELLER/Default/2021/1/HQ/WY/NO/100659275/piling-foundation-machine-500x500.jpeg", rating: 3 },
  { id: 12, name: "Jack Orange", text: "Amazing quality, exceeded my expectations.", image: "https://tiimg.tistatic.com/fp/1/006/486/heavy-tractor-piling-machine-942.jpg", rating: 5 },
  { id: 1, name: "John Doe", text: "Excellent service! Highly recommended.", image: "https://th.bing.com/th/id/OIP.SVrM_vmlgId9Kb88j_REawHaGY?pid=ImgDet&w=179&h=154&c=7&dpr=1.3", rating: 5 },
  { id: 2, name: "Jane Smith", text: "Very satisfied with the product quality.", image: "https://th.bing.com/th/id/OIP.hOdCWbgqzcOv5kTJVcil2gHaE2?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", rating: 4 },
  { id: 3, name: "Alice Brown", text: "Fantastic experience, will come back!", image: "https://www.sanatiborewells.com/assets/img/borewell-drilling-services-in-Bangalore.jpg", rating: 5 },
  { id: 4, name: "Bob White", text: "Great customer service, fast delivery.", image: "https://th.bing.com/th/id/OIP.CFqYU1jJkpbEXTdbjxeb3AHaEK?w=1280&h=720&rs=1&pid=ImgDetMain", rating: 3 },
  { id: 5, name: "Charlie Green", text: "Good value for money. Worth it!", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/XN/MH/TC/35368416/0-31605400-1490263125-borewell-jpg-500x500.jpg", rating: 4 },
  { id: 6, name: "David Clark", text: "Impressed with the professionalism.", image: "https://tiimg.tistatic.com/fp/1/003/240/fully-automatic-borewell-drilling-service-128.jpg", rating: 5 },
  { id: 7, name: "Eva Blue", text: "Nice selection of products and quick shipping.", image: "https://th.bing.com/th/id/OIP.Wyg-RHV2KNnvkFm98oQFNgAAAA?pid=ImgDet&w=179&h=317&c=7&dpr=1.3", rating: 4 },
  { id: 8, name: "Frank Yellow", text: "The best shopping experience I've had in years.", image: "https://i.ytimg.com/vi/YhdhQ-fbQ1c/maxresdefault.jpg", rating: 5 },
  { id: 9, name: "Grace Red", text: "Affordable prices and great quality.", image: "https://th.bing.com/th/id/OIP.lP-Li7MNttFKsHKxDTB13gHaJ4?w=960&h=1280&rs=1&pid=ImgDetMain", rating: 4 },
  { id: 10, name: "Henry Pink", text: "Will definitely recommend to friends.", image: "https://sanidhyaborewells.com/wp-content/uploads/2023/09/sanidhyaborewells-services.jpeg", rating: 5 },
  { id: 11, name: "Ivy Gray", text: "Reliable and fast service, 5 stars!", image: "https://5.imimg.com/data5/SELLER/Default/2021/1/HQ/WY/NO/100659275/piling-foundation-machine-500x500.jpeg", rating: 3 },
  { id: 12, name: "Jack Orange", text: "Amazing quality, exceeded my expectations.", image: "https://tiimg.tistatic.com/fp/1/006/486/heavy-tractor-piling-machine-942.jpg", rating: 5 },
  { id: 1, name: "John Doe", text: "Excellent service! Highly recommended.", image: "https://th.bing.com/th/id/OIP.SVrM_vmlgId9Kb88j_REawHaGY?pid=ImgDet&w=179&h=154&c=7&dpr=1.3", rating: 5 },
  { id: 2, name: "Jane Smith", text: "Very satisfied with the product quality.", image: "https://th.bing.com/th/id/OIP.hOdCWbgqzcOv5kTJVcil2gHaE2?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", rating: 4 },
  { id: 3, name: "Alice Brown", text: "Fantastic experience, will come back!", image: "https://www.sanatiborewells.com/assets/img/borewell-drilling-services-in-Bangalore.jpg", rating: 5 },
  { id: 4, name: "Bob White", text: "Great customer service, fast delivery.", image: "https://th.bing.com/th/id/OIP.CFqYU1jJkpbEXTdbjxeb3AHaEK?w=1280&h=720&rs=1&pid=ImgDetMain", rating: 3 },
  { id: 5, name: "Charlie Green", text: "Good value for money. Worth it!", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/XN/MH/TC/35368416/0-31605400-1490263125-borewell-jpg-500x500.jpg", rating: 4 },
  { id: 6, name: "David Clark", text: "Impressed with the professionalism.", image: "https://tiimg.tistatic.com/fp/1/003/240/fully-automatic-borewell-drilling-service-128.jpg", rating: 5 },
  { id: 7, name: "Eva Blue", text: "Nice selection of products and quick shipping.", image: "https://th.bing.com/th/id/OIP.Wyg-RHV2KNnvkFm98oQFNgAAAA?pid=ImgDet&w=179&h=317&c=7&dpr=1.3", rating: 4 },
  { id: 8, name: "Frank Yellow", text: "The best shopping experience I've had in years.", image: "https://i.ytimg.com/vi/YhdhQ-fbQ1c/maxresdefault.jpg", rating: 5 },
  { id: 9, name: "Grace Red", text: "Affordable prices and great quality.", image: "https://th.bing.com/th/id/OIP.lP-Li7MNttFKsHKxDTB13gHaJ4?w=960&h=1280&rs=1&pid=ImgDetMain", rating: 4 },
  { id: 10, name: "Henry Pink", text: "Will definitely recommend to friends.", image: "https://sanidhyaborewells.com/wp-content/uploads/2023/09/sanidhyaborewells-services.jpeg", rating: 5 },
  { id: 11, name: "Ivy Gray", text: "Reliable and fast service, 5 stars!", image: "https://5.imimg.com/data5/SELLER/Default/2021/1/HQ/WY/NO/100659275/piling-foundation-machine-500x500.jpeg", rating: 3 },
  { id: 12, name: "Jack Orange", text: "Amazing quality, exceeded my expectations.", image: "https://tiimg.tistatic.com/fp/1/006/486/heavy-tractor-piling-machine-942.jpg", rating: 5 },
  { id: 1, name: "John Doe", text: "Excellent service! Highly recommended.", image: "https://th.bing.com/th/id/OIP.SVrM_vmlgId9Kb88j_REawHaGY?pid=ImgDet&w=179&h=154&c=7&dpr=1.3", rating: 5 },
  { id: 2, name: "Jane Smith", text: "Very satisfied with the product quality.", image: "https://th.bing.com/th/id/OIP.hOdCWbgqzcOv5kTJVcil2gHaE2?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", rating: 4 },
  { id: 3, name: "Alice Brown", text: "Fantastic experience, will come back!", image: "https://www.sanatiborewells.com/assets/img/borewell-drilling-services-in-Bangalore.jpg", rating: 5 },
  { id: 4, name: "Bob White", text: "Great customer service, fast delivery.", image: "https://th.bing.com/th/id/OIP.CFqYU1jJkpbEXTdbjxeb3AHaEK?w=1280&h=720&rs=1&pid=ImgDetMain", rating: 3 },
  { id: 5, name: "Charlie Green", text: "Good value for money. Worth it!", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/XN/MH/TC/35368416/0-31605400-1490263125-borewell-jpg-500x500.jpg", rating: 4 },
  { id: 6, name: "David Clark", text: "Impressed with the professionalism.", image: "https://tiimg.tistatic.com/fp/1/003/240/fully-automatic-borewell-drilling-service-128.jpg", rating: 5 },
  { id: 7, name: "Eva Blue", text: "Nice selection of products and quick shipping.", image: "https://th.bing.com/th/id/OIP.Wyg-RHV2KNnvkFm98oQFNgAAAA?pid=ImgDet&w=179&h=317&c=7&dpr=1.3", rating: 4 },
  { id: 8, name: "Frank Yellow", text: "The best shopping experience I've had in years.", image: "https://i.ytimg.com/vi/YhdhQ-fbQ1c/maxresdefault.jpg", rating: 5 },
  { id: 9, name: "Grace Red", text: "Affordable prices and great quality.", image: "https://th.bing.com/th/id/OIP.lP-Li7MNttFKsHKxDTB13gHaJ4?w=960&h=1280&rs=1&pid=ImgDetMain", rating: 4 },
  { id: 10, name: "Henry Pink", text: "Will definitely recommend to friends.", image: "https://sanidhyaborewells.com/wp-content/uploads/2023/09/sanidhyaborewells-services.jpeg", rating: 5 },
  { id: 11, name: "Ivy Gray", text: "Reliable and fast service, 5 stars!", image: "https://5.imimg.com/data5/SELLER/Default/2021/1/HQ/WY/NO/100659275/piling-foundation-machine-500x500.jpeg", rating: 3 },
  { id: 12, name: "Jack Orange", text: "Amazing quality, exceeded my expectations.", image: "https://tiimg.tistatic.com/fp/1/006/486/heavy-tractor-piling-machine-942.jpg", rating: 5 },
  { id: 1, name: "John Doe", text: "Excellent service! Highly recommended.", image: "https://th.bing.com/th/id/OIP.SVrM_vmlgId9Kb88j_REawHaGY?pid=ImgDet&w=179&h=154&c=7&dpr=1.3", rating: 5 },
  { id: 2, name: "Jane Smith", text: "Very satisfied with the product quality.", image: "https://th.bing.com/th/id/OIP.hOdCWbgqzcOv5kTJVcil2gHaE2?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", rating: 4 },
  { id: 3, name: "Alice Brown", text: "Fantastic experience, will come back!", image: "https://www.sanatiborewells.com/assets/img/borewell-drilling-services-in-Bangalore.jpg", rating: 5 },
  { id: 4, name: "Bob White", text: "Great customer service, fast delivery.", image: "https://th.bing.com/th/id/OIP.CFqYU1jJkpbEXTdbjxeb3AHaEK?w=1280&h=720&rs=1&pid=ImgDetMain", rating: 3 },
  { id: 5, name: "Charlie Green", text: "Good value for money. Worth it!", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/XN/MH/TC/35368416/0-31605400-1490263125-borewell-jpg-500x500.jpg", rating: 4 },
  { id: 6, name: "David Clark", text: "Impressed with the professionalism.", image: "https://tiimg.tistatic.com/fp/1/003/240/fully-automatic-borewell-drilling-service-128.jpg", rating: 5 },
  { id: 7, name: "Eva Blue", text: "Nice selection of products and quick shipping.", image: "https://th.bing.com/th/id/OIP.Wyg-RHV2KNnvkFm98oQFNgAAAA?pid=ImgDet&w=179&h=317&c=7&dpr=1.3", rating: 4 },
  { id: 8, name: "Frank Yellow", text: "The best shopping experience I've had in years.", image: "https://i.ytimg.com/vi/YhdhQ-fbQ1c/maxresdefault.jpg", rating: 5 },
  { id: 9, name: "Grace Red", text: "Affordable prices and great quality.", image: "https://th.bing.com/th/id/OIP.lP-Li7MNttFKsHKxDTB13gHaJ4?w=960&h=1280&rs=1&pid=ImgDetMain", rating: 4 },
  { id: 10, name: "Henry Pink", text: "Will definitely recommend to friends.", image: "https://sanidhyaborewells.com/wp-content/uploads/2023/09/sanidhyaborewells-services.jpeg", rating: 5 },
  { id: 11, name: "Ivy Gray", text: "Reliable and fast service, 5 stars!", image: "https://5.imimg.com/data5/SELLER/Default/2021/1/HQ/WY/NO/100659275/piling-foundation-machine-500x500.jpeg", rating: 3 },
  { id: 12, name: "Jack Orange", text: "Amazing quality, exceeded my expectations.", image: "https://tiimg.tistatic.com/fp/1/006/486/heavy-tractor-piling-machine-942.jpg", rating: 5 },
  { id: 1, name: "John Doe", text: "Excellent service! Highly recommended.", image: "https://th.bing.com/th/id/OIP.SVrM_vmlgId9Kb88j_REawHaGY?pid=ImgDet&w=179&h=154&c=7&dpr=1.3", rating: 5 },
  { id: 2, name: "Jane Smith", text: "Very satisfied with the product quality.", image: "https://th.bing.com/th/id/OIP.hOdCWbgqzcOv5kTJVcil2gHaE2?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", rating: 4 },
  { id: 3, name: "Alice Brown", text: "Fantastic experience, will come back!", image: "https://www.sanatiborewells.com/assets/img/borewell-drilling-services-in-Bangalore.jpg", rating: 5 },
  { id: 4, name: "Bob White", text: "Great customer service, fast delivery.", image: "https://th.bing.com/th/id/OIP.CFqYU1jJkpbEXTdbjxeb3AHaEK?w=1280&h=720&rs=1&pid=ImgDetMain", rating: 3 },
  { id: 5, name: "Charlie Green", text: "Good value for money. Worth it!", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/XN/MH/TC/35368416/0-31605400-1490263125-borewell-jpg-500x500.jpg", rating: 4 },
  { id: 6, name: "David Clark", text: "Impressed with the professionalism.", image: "https://tiimg.tistatic.com/fp/1/003/240/fully-automatic-borewell-drilling-service-128.jpg", rating: 5 },
  { id: 7, name: "Eva Blue", text: "Nice selection of products and quick shipping.", image: "https://th.bing.com/th/id/OIP.Wyg-RHV2KNnvkFm98oQFNgAAAA?pid=ImgDet&w=179&h=317&c=7&dpr=1.3", rating: 4 },
  { id: 8, name: "Frank Yellow", text: "The best shopping experience I've had in years.", image: "https://i.ytimg.com/vi/YhdhQ-fbQ1c/maxresdefault.jpg", rating: 5 },
  { id: 9, name: "Grace Red", text: "Affordable prices and great quality.", image: "https://th.bing.com/th/id/OIP.lP-Li7MNttFKsHKxDTB13gHaJ4?w=960&h=1280&rs=1&pid=ImgDetMain", rating: 4 },
  { id: 10, name: "Henry Pink", text: "Will definitely recommend to friends.", image: "https://sanidhyaborewells.com/wp-content/uploads/2023/09/sanidhyaborewells-services.jpeg", rating: 5 },
  { id: 11, name: "Ivy Gray", text: "Reliable and fast service, 5 stars!", image: "https://5.imimg.com/data5/SELLER/Default/2021/1/HQ/WY/NO/100659275/piling-foundation-machine-500x500.jpeg", rating: 3 },
  { id: 12, name: "Jack Orange", text: "Amazing quality, exceeded my expectations.", image: "https://tiimg.tistatic.com/fp/1/006/486/heavy-tractor-piling-machine-942.jpg", rating: 5 },
  // Add more reviews as needed
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "text-warning" : "text-muted"}>★</span>
    );
  }
  return <div>{stars}</div>;
};

const Review = () => {
  const [reviewsToShow, setReviewsToShow] = useState(6); // Initially show 6 reviews

  // Function to load more reviews
  const loadMoreReviews = () => {
    if (reviewsToShow + 3 <= allReviews.length) {
      setReviewsToShow(reviewsToShow + 3); // Load 3 more reviews
    } else {
      setReviewsToShow(allReviews.length); // Load all remaining reviews
    }
  };

  return (
    <div className="p-3">
      <Container>
        <h2 className="text-center my-4 fontdesign headingcss p-3">Customer Reviews</h2>
        <div className="fontdesign">
          <Row className="justify-content-center">
            {/* Loop over the reviews and display them */}
            {allReviews.slice(0, reviewsToShow).map((review) => (
              <Col md={4} key={review.id} className="mb-4">
                <Card className='border-0'>
                  <Card.Body className="text-center"> {/* Center content of Card */}
                    {/* Display the reviewer's image */}
                    <div className="mb-3">
                      <Image src={review.image} rounded width={150} height={150} />
                    </div>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Text>{review.text}</Card.Text>

                    {/* Display the rating stars */}
                    <StarRating rating={review.rating} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* "Load More Reviews" button */}
        {reviewsToShow < allReviews.length && (
          <div className="text-center  fontdesign mt-4">
            <Button onClick={loadMoreReviews} variant="success">
              More Reviews
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Review;

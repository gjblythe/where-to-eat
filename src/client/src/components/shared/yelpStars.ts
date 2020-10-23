import zero from '../../yelp_stars/web_and_ios/regular/regular_0.png';
import one from '../../yelp_stars/web_and_ios/regular/regular_1.png';
import oneHalf from '../../yelp_stars/web_and_ios/regular/regular_1_half.png';
import two from '../../yelp_stars/web_and_ios/regular/regular_2.png';
import twoHalf from '../../yelp_stars/web_and_ios/regular/regular_2_half.png';
import three from '../../yelp_stars/web_and_ios/regular/regular_3.png';
import threeHalf from '../../yelp_stars/web_and_ios/regular/regular_3_half.png';
import four from '../../yelp_stars/web_and_ios/regular/regular_4.png';
import fourHalf from '../../yelp_stars/web_and_ios/regular/regular_4_half.png';
import five from '../../yelp_stars/web_and_ios/regular/regular_5.png';

export const stars = (rating: string) => {
  let image;
  const score = parseFloat(rating);
  switch (score) {
    case 1:
      image = one;
      break;
    case 1.5:
      image = oneHalf;
     break; 
    case 2:
      image = two;
      break; 
    case 2.5:
      image = twoHalf;
      break; 
    case 3:
      image = three;
      break;  
    case 3.5:
      image = threeHalf;
      break;
    case 4:
      image = four;
      break;
    case 4.5:
      image = fourHalf;
      break;
    case 5:
      image = five;
      break;
    default:
      image = zero;
      break;
    }
    return image;
}

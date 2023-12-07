import tes1 from './tes_1.webp';
import tes2 from './tes_2.webp';
import tes3 from './tes_3.webp';

export const tweets = [
    {
        text: `"Very cute dress and fun color. i am also very impressed by the quality of the linen. Excited to wear this dress in the summer!"`,
        pText: "Makes me happy",
        img: tes1,
        name: "Rachael Torphy"
    },
    {
        text: `"Very cute dress and fun color. i am also very impressed by the quality of the linen. Excited to wear this dress in the summer!"`,
        pText: "I love demati",
        img: tes2,
        name: "Emily Ryan"
    },
    {
        text: `"Very cute dress and fun color. i am also very impressed by the quality of the linen. Excited to wear this dress in the summer!"`,
        pText: "I love this shirt",
        img: tes3,
        name: "John Doe"
    },
]

const tweetsByIndex = (index) => tweets[index % tweets.length];

export default tweetsByIndex;

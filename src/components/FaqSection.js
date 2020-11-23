import Toggle from './Toggle'

// import styles
import styled from 'styled-components'
import { StyledAbout } from '../styles'

const FaqSection = () => {
    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <Toggle>
                <div className="question" title='How Do I Start'>
                    <h4>How Do I Start?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, animi.</p>
                    </div>
                </div>
            </Toggle>
            <Toggle>
                <div className="question">
                    <h4>Daily Schedule</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, animi.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toggle>
            <Toggle>
                <div className="question">
                    <h4>Different Payment Methods</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, animi.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toggle>
            <Toggle>
                <div className="question">
                    <h4>What Products do you offer</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, animi.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toggle>
        </StyledFaq>
    )
}

// import styles
const StyledFaq = styled(StyledAbout)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection
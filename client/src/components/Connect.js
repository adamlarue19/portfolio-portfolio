import React from "react";
import { Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const Connect = () => {
    
    return (
        <section className="Connect">
            <Container>
                <h2>Lets Connect</h2>
                <h3>Email: Adamlarue1999@icloud.com</h3>

                <ButtonGroup className="btn-grp" size="lg" aria-label="Basic example">
                    <Button id="btn-1" >Resume</Button>
                    <Button id="btn-1">GitHub</Button>
                    <Button id="btn-1">Linkedin</Button>
                </ButtonGroup>

            </Container>
        </section>
    )
}
{/* <p>Email: Adamlarue1999@icloud.com</p>
                        <a href="https://www.linkedin.com/in/adamparkerlarue/"><p>linkedin: Click Here</p></a>
            
                        <p>Resume</p>
                        <p>GitHub</p> */}
export default Connect;
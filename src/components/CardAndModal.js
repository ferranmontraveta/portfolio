import React, { Component } from "react"
import Modal from '../components/Modal/Modal'
import Backdrop from '../components/Backdrop/Backdrop'
import Card from '../components/Card/Card'
import ModalBody from '../components/Modal/ModalBody'

class CardAndModal extends Component {
    state = {
        creating: false
    };

    startCreateEventHandler = () => {
        this.setState({creating: true});
    };

    modalCloseHandler = () => {
        this.setState({creating:false});
        console.log(this.creating);
    };

    render() {
        return (
            <React.Fragment>
                <div className="pj" onClick={this.startCreateEventHandler}>
                    <Card
                        name={this.props.title}
                        keyword1={this.props.keyword1}
                        description={this.props.description}
                    />
                </div>

                <React.Fragment>
                    {this.state.creating && <Backdrop />}
                    {this.state.creating && <Modal title={this.props.title} canClose onClose={this.modalCloseHandler}>
                        <Body
                            tags={this.props.tags}
                            technologies={this.props.technologies}
                            people={this.props.people}
                            text={this.props.text}
                            images={this.props.images}   
                        />
                    </Modal>}
                </React.Fragment>
            </React.Fragment>
        )
    }
};

const Body = ({ tags, technologies, people, text, images }) => (
    <div>
        <ModalBody 
            tags={tags}
            technologies={technologies}
            people={people}
            text={text}
            images={images}
        />
    </div>
)

export default CardAndModal;
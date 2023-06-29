import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
// import ConfirmSteps from './ConfirmSteps';

class TicketControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      // confirmSteps: false
      mainTicketList: [],
      selectedTicket: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList, 
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation
      ={this.handleAddingNewTicketToList}/>;
      buttonText = "Return to Ticket List"; 
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList}/>;
      buttonText = "Add Ticket"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

    // handleClick = () => {
  //   if (this.state.confirmSteps === false) {
  //     this.setState(prevState => ({
  //     confirmSteps: !prevState.confirmSteps 
  //     }));
  //   } else if (this.state.formVisibleOnPage === false) {
  //     this.setState(prevState => ({
  //     formVisibleOnPage: !prevState.formVisibleOnPage
  //     }));
  //   } else { 
  //     this.setState(prevState => ({
  //     formVisibleOnPage: !prevState.formVisibleOnPage,
  //     confirmSteps: !prevState.confirmSteps 
  //     }));
  //   }
  // }
  // render(){
  //   let currentlyVisibleState = null;
  //   let buttonText = null;
  //   if (this.state.formVisibleOnPage) {
  //     currentlyVisibleState = <NewTicketForm />
  //     buttonText = "Return to Ticket List";
  //   } else if (this.state.confirmSteps) {
  //     currentlyVisibleState = <ConfirmSteps />
  //     buttonText = "Yes";
  //   } else 
  //     currentlyVisibleState = <TicketList />
  //     buttonText = "Add Ticket";
    
  //   return(
  //     <React.Fragment>
  //       {currentlyVisibleState}
  //       <button onClick={this.handleClick}>{buttonText}</button>
  //     </React.Fragment>
  //   );
  // }
}

export default TicketControl
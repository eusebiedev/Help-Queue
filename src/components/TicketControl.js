import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
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
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList, 
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)
    [0];
    this.setState({selectedTicket: selectedTicket
    });
  }

  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket}/>
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation
      ={this.handleAddingNewTicketToList}/>;
      buttonText = "Return to Ticket List"; 
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
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
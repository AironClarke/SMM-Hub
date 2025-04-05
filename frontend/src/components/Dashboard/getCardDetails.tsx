import {
  progressCardDetails,
  completedCardDetails,
  upcommingCardDetails,
  draftCardDetails
 } from './cardDetails';

export function getCardDetails(selectedStaus: string){
  switch(selectedStaus){
    case 'In Progress':
      return progressCardDetails
    case 'Completed':
      return completedCardDetails
    case 'Upcomming':
      return upcommingCardDetails
    case 'Draft':
      return draftCardDetails
    default:
      return []
  }
}


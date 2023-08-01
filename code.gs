const debug = true;

//Search string to look for ticket number inside of email population dictated by ticketEmailSearch variable
const emailTicketNumbRegExString = '\\[Ticket #([0-9]+)\\]';
//Determines population of emails that will be touched by script
const ticketEmailSearch = 'in:inbox (from:(umd-servicedesk-replies@umich.edu) OR (from:(notify@teamdynamixapp.com)))';

const arrTicketsToProcess = [];

function ticketDedupe() {
  var inboxThreads = GmailApp.search(ticketEmailSearch);
  var emailThreads;
  var subject;
  var ticketNum;
  var regParse;
  var ticketNumRegex = RegExp(emailTicketNumbRegExString);


  if(debug) console.log(inboxThreads.length);

  if(inboxThreads.length > 0)
  {

    inboxThreads.forEach(function(e){
      subject = e.getFirstMessageSubject();
      regParse = ticketNumRegex.exec(subject);
      if(regParse != null){
        ticketNum = regParse[1];
        if(!arrTicketsToProcess.includes(ticketNum))
          arrTicketsToProcess.push(ticketNum);
      }
    });

    if(debug) console.log(arrTicketsToProcess);

    arrTicketsToProcess.forEach(function(ticketNum){
      emailThreads = GmailApp.search(ticketEmailSearch+" "+"subject:"+ticketNum);

      if(emailThreads.length > 1){

        if(debug) console.log(emailThreads.length.toString() + ' found emails with ticket #' + "subject:"+ticketNum);

        var i = 1; //don't archive the first email
        for(i;i<emailThreads.length;i++){
          emailThreads[i].markRead();
          emailThreads[i].moveToArchive();
        }
      }
    });

  }
}

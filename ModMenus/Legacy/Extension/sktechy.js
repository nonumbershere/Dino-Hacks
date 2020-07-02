function setup(){
  noCanvas();
  let userput = select('#UserButton')
  UserButton.input(NewBtu);

  function NewBtu() {

       chrome.tabs.getCurrent(gotTabs);

       function gotTabs(tabs) {
           console.log("got tabs");
           console.log(tabs);

           let params = {
             active: true,
             currentWindow: true 
           }
         chrome.tabs.query(params, gotTabs);

      let message = userinput.value();
      let msg = {
    txt: userinput.value()
}

chrome.tabs.sendMessage(tab[0].id, msg);

  }

  }
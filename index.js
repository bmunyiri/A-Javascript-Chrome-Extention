let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById( "ul-el" )
const deleteBtn = document.getElementById( "delete-btn" )
const tabBtn = document.getElementById( "tab-btn" )
const leadsFromLocalStorage = JSON.parse( localStorage.getItem( "KWPleads" ) )

if ( leadsFromLocalStorage ) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
 
function render(Leads) {
    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${Leads[i]}'>
                    ${Leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

inputBtn.addEventListener( "click", function () {
    
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
    localStorage.setItem( "KWPleads", JSON.stringify( myLeads ) )
  
})


deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear
    myLeads = []
    render(myLeads)
 
    
} )



tabBtn.addEventListener( 'click', function () {

     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      
       myLeads.push( tabs[ 0 ].url )
    localStorage.setItem( "KWPleads", JSON.stringify( myLeads ) )
    console.log(tabs[0])
      render(myLeads)

    })
    
 
} )




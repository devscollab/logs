// simple js for changing 

// never remove this !!!!!!!!!!!!!!
//raj token 1d14756a4fe303a41b91799adf61a62ab45a37e0
let headers = {
    "Authorization": 'Token 1d14756a4fe303a41b91799adf61a62ab45a37e0'
}

// VUE JS
let api_url = `https://api.github.com/orgs/devscollab/events`
async function getEvents(api_url) {
    let response = await fetch(api_url);
    let data = await response.json()
    return data;
}



// VUE JS
var vm = new Vue({
    el: '#app',
    data: {
        api_url: `https://api.github.com/orgs/devscollab/events`,
        list: null,
        desc: 'https://www.google.com',
        your_events: true
    },
    methods: {
        changeApiUrl() {
            newUsername = document.getElementById('newUsername').value
            if (newUsername) {
                console.log(newUsername)
                api_url_new = `https://api.github.com/users/${newUsername}/events`
                getEvents(api_url_new)
                    .then(data => {
                        this.list = data
                    })

            } else
                alert("Enter your github username")

        }
    },
    created() {
        getEvents(this.api_url)
            .then(data => {
                this.list = data

                console.log(data)
            });
    }
})
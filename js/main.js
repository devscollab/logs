// VUE JS
let repo_url = `https://api.github.com/orgs/devscollab/events`
async function getRepos() {
    let response = await fetch(repo_url);
    let data = await response.json()
    return data;
}



// VUE JS
var vm = new Vue({
    el: '#app',
    data: {
        list: null,
        desc: 'https://www.google.com',
        your_events: true
    },
    created() {
        getRepos()
            .then(data => {
                this.list = data

                console.log(data)
            });
    }
})
var app = new Vue({
    el: '.app',
    data: {
        word: '',
        name: '',
        figureOfSpeech: '',
    },
    methods: {
        getwordfromdict(word) {
            fetch(`http://localhost:3000/oxfordrequest/${this.word}`)
                .then(response => (response.ok ? response.json() : Promise.reject(response)))
                .then(resp => {
                    console.log("We received a response from Oxford!");
                    console.log(resp);
                    this.name = resp.results[0].id
                    this.figureOfSpeech = resp.results[0].lexicalEntries[0].lexicalCategory.id
                })
            this.word = '';
        }
    }
});
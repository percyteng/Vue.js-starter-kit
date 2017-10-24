export default {
    name: 'test',
    props: {
        msg:{
            type:String,
            default: 'Foobar'
        }
    },
    data(){
        return {
            title: 'Hello world',
            titleAgain: '<h1>HEHE</h1>',
            user:{
                firstName: 'Percy',
                lastName:'Teng'
            },
            showDumb: false,
            items: [
                {title: 'Item one'},
                {title: 'Item two'},
                {title: 'Item three'},
                {title: 'Item four'},
                {title: 'Item five'},
            ]
        }
    },
    methods:{
        greet: function(greeting){
            alert(greeting)
        },
        pressKey: function(e){
            console.log(e.target.value);
        },
        enterHit: function(e){
            console.log('you hit enter');
        },
    },
    computed: {
        fullName: function(){
            return this.user.firstName + ' ' + this.user.lastName
        }
    }
}
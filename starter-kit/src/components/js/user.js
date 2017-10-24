export default {
    name: 'user',
    data(){
        return {
            newUser:{},
            users:[
                {
                    name:'Percy Teng',
                    email:'percytsy@gmail.com',
                    contacted: false
                },
                {
                    name:'Josh Lee',
                    email:'joshlee@gmail.com',
                    contacted: false
                },
                {
                    name:'Hassan Haq',
                    email:'hassanhaq@gmail.com',
                    contacted: false
                }
            ]
        }
    },
    methods:{
        addUser: function(e){
            this.users.push({
                name: this.newUser.name,
                email: this.newUser.email,
                contacted: false
            })
            e.preventDefault();
            
        },
        deleteUser: function(user){
            this.users.splice(this.users.indexOf(user) ,1)
        }
    },
    created: function(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(function(res){
                this.users= res.data;
            })
    }
}
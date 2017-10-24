<template>
    <div class = 'test'>
        <input type="text" v-model='title'>
        <span v-if='showDumb' v-html='titleAgain'></span>
        <h1 v-else>{{title}}</h1>
        <p>{{user.firstName}}</p>
        <p v-text='user.lastName'></p>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
        <button v-on:click="greet('hello world')"> Say greeting</button>
        <input type="text" v-on:keyup = "pressKey" v-on:keyup.enter="enterHit">
        <br/>
        <label>first Name:</label>
        <input type="text" v-model='user.firstName'>
        <br>
        <label>Last Name:</label>        
        <input type="text" v-model='user.lastName'>
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
    </div>
</template>

<script src='./js/test.js'></script>

<style scoped>

</style>
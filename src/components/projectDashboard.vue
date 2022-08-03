<template>
    <div id="main-dashboard">
        <div id="header">
        </div>
        <div id="body">
        </div>
        <div id="footer">
        </div>
    </div>
</template>

<script>

export default {
    name: 'projectDashboard',
    props: ['personObj'],
    data() {
        return {
            // personObj: 'hello'
        }
    },
    created() {
        console.log('hello from project dash')
        console.log(this.personObj)
    }
}

</script>

<style scoped>

* {
    margin: 0;
}

#main-dashboard {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
}


#header {
    width: 100vw;
    height: 15vh;

    /* background-color: orange; */

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    font-family:Arial, Helvetica, sans-serif;
}

#body {
    width: 100vw;
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    /* background-color: purple; */
}

#footer {
    width: 100vw;
    height: 5vh;

    /* background-color: red; */
}

</style>